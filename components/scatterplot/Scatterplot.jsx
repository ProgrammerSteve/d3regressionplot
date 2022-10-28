
import { ScatterContainer } from './Scatterplot.style';
import * as d3 from "d3";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Scatterplot=(
    {
        minX=0,
        maxX=100,

        minY=0,
        maxY=100,

        chartWidth=700,
        chartHeight=700,

        xTitle="x-axis",
        yTitle="y-axis",

        gTitle="Scatter Plot",

        marginTop=100,
        marginBottom=0,
        marginLeft=80,
        marginRight=40,
    }
    )=>{

    const {dataX,dataY} = useSelector(state => state.data)
    const filteredDataX=dataX.filter((n,ind)=>dataX[ind] && dataY[ind]);
    const filteredDataY=dataY.filter((n,ind)=>dataX[ind] && dataY[ind]);

    const width = chartWidth - marginLeft - marginRight
    const height = chartHeight - marginTop - marginBottom

    //creates the xScale and yScale functions
    const xScale = d3.scaleLinear().domain([minX, maxX]).range([0, width])
    const yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0])

    //create the grids
    const xAxisGrid = d3.axisBottom(xScale)
    .tickSize(-height)
    .tickFormat('')
    .ticks(10);
    const yAxisGrid = d3.axisLeft(yScale)
    .tickSize(-width)
    .tickFormat('')
    .ticks(10);

    let numPoints=filteredDataX.length;
    let sumX = 0;
    let sumXsq = 0;
    let sumY = 0;
    let sumXY=0;
    let firstPointX=minX;
    let lastPointX=maxX;
    let firstPointY=minY;
    let lastPointY=maxY;
    let yintercept=0;
    let slope=0;
    let SSR= 0;
    let SST= 0;

    const regressionline=(x,slope,yint)=>{
        return x*slope+yint;
    }

    filteredDataX.forEach((num,ind)=>{
        sumX+=filteredDataX[ind];
        sumY+=filteredDataY[ind];
        sumXY+=(filteredDataX[ind]*filteredDataY[ind]);
        sumXsq+=(filteredDataX[ind]*filteredDataX[ind]);
        if(num<firstPointX)firstPointX=num;
        if(num>lastPointX)lastPointX=num;
    })
    let mean=sumY/numPoints;
    yintercept= (sumY*sumXsq - sumX*sumXY)/(numPoints*sumXsq-sumX**2);
    slope=(numPoints*sumXY-sumX*sumY)/(numPoints*sumXsq-sumX**2)
    firstPointY=regressionline(firstPointX,slope,yintercept)
    lastPointY=regressionline(lastPointX,slope,yintercept)
    filteredDataX.forEach((_,ind)=>{
        SSR+=(filteredDataY[ind]-regressionline(filteredDataX[ind],slope,yintercept))**2;
        SST+=(filteredDataY[ind]-mean)**2;
    })
    let r_squared=1-(SSR/SST);

    //creates a dataset object
    const dataset = d3.range(numPoints).map((d,ind) => {
        return { x: filteredDataX[ind], y: filteredDataY[ind] }
    })

    useEffect(()=>{
        const svg = d3
            .select('#scatter')
            .append('svg')
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 700 700")
            .classed("svg-content", true)
            // .attr('width', width + marginLeft + marginRight)
            // .attr('height', height + marginTop + marginBottom)


        // create X and Y axis
        svg
            .append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + marginLeft + ',' + (height + marginTop) + ')')
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("class", "tickmark-numbers")
        svg
            .append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
            .call(d3.axisLeft(yScale))
            .selectAll("text")
            .attr("class", "tickmark-numbers")
        // create the grids
        svg.append('g')
            .attr('class', 'axis-grid-background-color')
            .attr('transform', 'translate(' + marginLeft + ',' + (height + marginTop) + ')')
            .call(xAxisGrid);
        svg.append('g')
            .attr('class', 'axis-grid-background-color')
            .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
            .call(yAxisGrid);


        // Title
        svg.append('text')
            .attr('class','titleText')
            .attr('x', (chartWidth/2)+50)
            .attr('y', marginTop-5)
            .text(`${gTitle}`);
        // X label
        svg.append('text')
            .attr('x', width/2 + 80)
            .attr('y', height - marginTop + 140)
            .attr('class','AxisText')
            .text(`${xTitle}`);
        // Y label
        svg.append('text')
            .attr('transform', 'translate(20,'+ height/2.0 + ')rotate(-90)')
            .attr('class','AxisText')
            .text(`${yTitle}`);

        let equation= ``;
        let rsqString=``;
        if(filteredDataX.length>0){
            equation=`y=${yintercept.toFixed(2)}+${slope.toFixed(2)}x`
            rsqString=`r^2=${r_squared.toFixed(2)}`
        }
        // regression equation label
        svg.append('text')
            .attr('class','equationText')
            .attr('x', (chartWidth-150))
            .attr('y', marginTop-30)            
            .style('font-family', 'Helvetica')
            .text(equation);
        // regression coeff.
        svg.append('text')
            .attr('class','equationText')
            .attr('x', (chartWidth-150))
            .attr('y', marginTop-3)
            .style('font-family', 'Helvetica')
            .text(rsqString);
        // creates the line
        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y))
        //appends the line
        const lineWrapper = svg
            .append('g')
            .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');
        //appends the path between the points
        lineWrapper
            .append('path')
            .datum([{x:firstPointX,y:firstPointY},{x:lastPointX,y:lastPointY}])
            .attr('class', 'regressionline')
            .style("stroke-dasharray", ("7, 7")) 
            .attr('d', line)
        // create scatter points
        svg.append('g')
            .selectAll("dot")
            .data(dataset)
            .enter()
            .append("circle")
                .attr("cx", function (d) { return xScale(d.x); } )
                .attr("cy", function (d) { return yScale(d.y); } )
                .attr("r", 5)
                .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
                .style("fill", "#CC0000");
        return ()=>{
            d3.selectAll("svg").remove();
        }
    },[filteredDataX,filteredDataY,chartWidth])

    return(
        <ScatterContainer id="scatter">
        </ScatterContainer>
    )
}

export default Scatterplot;