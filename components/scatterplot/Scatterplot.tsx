<<<<<<< HEAD
import { ScatterContainer } from './Scatterplot.style';
import * as d3 from 'd3';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
=======
import { ScatterContainer } from "./Scatterplot.style";
import * as d3 from "d3";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

>>>>>>> 94694ae (refactored styling and cleaned up code)

interface ScatterplotProps {
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  chartWidth?: number;
  chartHeight?: number;
  xTitle?: string;
  yTitle?: string;
  gTitle?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}


const Scatterplot: React.FC<ScatterplotProps> = ({
  minX = 0,
  maxX = 100,
  minY = 0,
  maxY = 100,
<<<<<<< HEAD
  chartWidth = 700,
  chartHeight = 700,
  xTitle = 'x-axis',
  yTitle = 'y-axis',
  gTitle = 'Scatter Plot',
  marginTop = 100,
  marginBottom = 0,
  marginLeft = 80,
  marginRight = 40,
}) => {
  const { dataX, dataY } = useSelector((state: any) => state.data);
  const filteredDataX = dataX.filter((_: any, ind: number) => dataX[ind] && dataY[ind]);
  const filteredDataY = dataY.filter((_: any, ind: number) => dataX[ind] && dataY[ind]);
=======
  xTitle = "x-axis",
  yTitle = "y-axis",
  gTitle = "Scatter Plot",
}) => {
  const { dataX, dataY } = useSelector((state: any) => state.data);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 700 });

  // Measure container and calculate responsive dimensions
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        // Use 80% of container width/height, whichever is smaller to maintain square aspect
        const size = Math.min(containerWidth, containerHeight) * 0.8;
        setDimensions({ width: size, height: size });
      }
    };

    updateDimensions();

    // Update on window resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate responsive margins and font sizes based on chart size
  const chartWidth = dimensions.width;
  const chartHeight = dimensions.height;
  const marginTop = chartHeight * 0.12; // 12% of chart height
  const marginBottom = chartHeight * 0.08; // 8% of chart height
  const marginLeft = chartWidth * 0.12; // 12% of chart width
  const marginRight = chartWidth * 0.08; // 8% of chart width

  // Responsive font sizes based on chart size
  const baseFontSize = Math.max(8, Math.min(14, chartWidth * 0.02)); // Scale with chart size, min 8px, max 14px
  const titleFontSize = Math.max(10, Math.min(18, chartWidth * 0.025)); // Slightly larger for title
  const tickFontSize = Math.max(7, Math.min(12, chartWidth * 0.018)); // Smaller for tick marks
  const filteredDataX = dataX.filter(
    (_: any, ind: number) => dataX[ind] && dataY[ind]
  );
  const filteredDataY = dataY.filter(
    (_: any, ind: number) => dataX[ind] && dataY[ind]
  );
>>>>>>> 94694ae (refactored styling and cleaned up code)

  const width = chartWidth - marginLeft - marginRight;
  const height = chartHeight - marginTop - marginBottom;

  // Scales for x and y axes
  const xScale = d3.scaleLinear().domain([minX, maxX]).range([0, width]);
  const yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0]);

  // Grid generators
<<<<<<< HEAD
  const xAxisGrid = d3.axisBottom(xScale).tickSize(-height).tickFormat(() => '').ticks(10);
  const yAxisGrid = d3.axisLeft(yScale).tickSize(-width).tickFormat(() => '').ticks(10);
=======
  const xAxisGrid = d3
    .axisBottom(xScale)
    .tickSize(-height)
    .tickFormat(() => "")
    .ticks(10);
  const yAxisGrid = d3
    .axisLeft(yScale)
    .tickSize(-width)
    .tickFormat(() => "")
    .ticks(10);
>>>>>>> 94694ae (refactored styling and cleaned up code)

  // Compute regression statistics
  const numPoints = filteredDataX.length;
  let sumX = 0;
  let sumXsq = 0;
  let sumY = 0;
  let sumXY = 0;
  let firstPointX = minX;
  let lastPointX = maxX;
  let firstPointY = minY;
  let lastPointY = maxY;
  let yintercept = 0;
  let slope = 0;
  let SSR = 0;
  let SST = 0;

  const regressionline = (x: number, m: number, b: number) => x * m + b;

  filteredDataX.forEach((num: number, ind: number) => {
    sumX += filteredDataX[ind];
    sumY += filteredDataY[ind];
    sumXY += filteredDataX[ind] * filteredDataY[ind];
    sumXsq += filteredDataX[ind] * filteredDataX[ind];
    if (num < firstPointX) firstPointX = num;
    if (num > lastPointX) lastPointX = num;
  });
  const mean = sumY / numPoints;
<<<<<<< HEAD
  yintercept = (sumY * sumXsq - sumX * sumXY) / (numPoints * sumXsq - sumX ** 2);
=======
  yintercept =
    (sumY * sumXsq - sumX * sumXY) / (numPoints * sumXsq - sumX ** 2);
>>>>>>> 94694ae (refactored styling and cleaned up code)
  slope = (numPoints * sumXY - sumX * sumY) / (numPoints * sumXsq - sumX ** 2);
  firstPointY = regressionline(firstPointX, slope, yintercept);
  lastPointY = regressionline(lastPointX, slope, yintercept);
  filteredDataX.forEach((_: any, ind: number) => {
<<<<<<< HEAD
    SSR += (filteredDataY[ind] - regressionline(filteredDataX[ind], slope, yintercept)) ** 2;
=======
    SSR +=
      (filteredDataY[ind] -
        regressionline(filteredDataX[ind], slope, yintercept)) **
      2;
>>>>>>> 94694ae (refactored styling and cleaned up code)
    SST += (filteredDataY[ind] - mean) ** 2;
  });
  const r_squared = 1 - SSR / SST;

  // Create a dataset for d3. Use an explicit type on the callback to avoid
  // implicit any for the first argument which we ignore.
  const dataset = d3.range(numPoints).map((_d: unknown, ind: number) => {
    return { x: filteredDataX[ind], y: filteredDataY[ind] };
  });

<<<<<<< HEAD
  // Draw the chart on mount and whenever the data changes
  useEffect(() => {
    const svg = d3
      .select('#scatter')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 700 700')
      .classed('svg-content', true);

    // X and Y axes
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + marginLeft + ',' + (height + marginTop) + ')')
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('class', 'tickmark-numbers');
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('class', 'tickmark-numbers');

    // Grid backgrounds
    svg
      .append('g')
      .attr('class', 'axis-grid-background-color')
      .attr('transform', 'translate(' + marginLeft + ',' + (height + marginTop) + ')')
      .call(xAxisGrid);
    svg
      .append('g')
      .attr('class', 'axis-grid-background-color')
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
=======
  // Draw the chart on mount and whenever the data or dimensions change
  useEffect(() => {
    if (chartWidth === 0 || chartHeight === 0) return; // Wait for dimensions

    const svg = d3
      .select("#scatter")
      .append("svg")
      .attr("width", chartWidth)
      .attr("height", chartHeight)
      .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
      .classed("svg-content", true);

    // X and Y axes
    svg
      .append("g")
      .attr("class", "axis")
      .attr(
        "transform",
        "translate(" + marginLeft + "," + (height + marginTop) + ")"
      )
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("class", "tickmark-numbers")
      .style("font-size", `${tickFontSize}px`);
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + marginLeft + "," + marginTop + ")")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .attr("class", "tickmark-numbers")
      .style("font-size", `${tickFontSize}px`);

    // Grid backgrounds
    svg
      .append("g")
      .attr("class", "axis-grid-background-color")
      .attr(
        "transform",
        "translate(" + marginLeft + "," + (height + marginTop) + ")"
      )
      .call(xAxisGrid);
    svg
      .append("g")
      .attr("class", "axis-grid-background-color")
      .attr("transform", "translate(" + marginLeft + "," + marginTop + ")")
>>>>>>> 94694ae (refactored styling and cleaned up code)
      .call(yAxisGrid);

    // Titles and labels
    svg
<<<<<<< HEAD
      .append('text')
      .attr('class', 'titleText')
      .attr('x', chartWidth / 2 + 50)
      .attr('y', marginTop - 5)
      .text(`${gTitle}`);
    svg
      .append('text')
      .attr('x', width / 2 + 80)
      .attr('y', height - marginTop + 140)
      .attr('class', 'AxisText')
      .text(`${xTitle}`);
    svg
      .append('text')
      .attr('transform', 'translate(20,' + height / 2.0 + ')rotate(-90)')
      .attr('class', 'AxisText')
      .text(`${yTitle}`);

    // Equation and r-squared annotations
    let equation = '';
    let rsqString = '';
=======
      .append("text")
      .attr("class", "titleText")
      .attr("x", chartWidth / 2)
      .attr("y", marginTop * 0.6)
      .style("font-size", `${titleFontSize}px`)
      .text(`${gTitle}`);
    svg
      .append("text")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight - marginBottom * 0.3)
      .attr("class", "AxisText")
      .style("font-size", `${baseFontSize}px`)
      .text(`${xTitle}`);
    svg
      .append("text")
      .attr(
        "transform",
        `translate(${marginLeft * 0.3}, ${chartHeight / 2})rotate(-90)`
      )
      .attr("class", "AxisText")
      .style("font-size", `${baseFontSize}px`)
      .text(`${yTitle}`);

    // Equation and r-squared annotations - positioned at top-right corner of card
    let equation = "";
    let rsqString = "";
>>>>>>> 94694ae (refactored styling and cleaned up code)
    if (filteredDataX.length > 0) {
      equation = `y=${yintercept.toFixed(2)}+${slope.toFixed(2)}x`;
      rsqString = `r^2=${r_squared.toFixed(2)}`;
    }
<<<<<<< HEAD
    svg
      .append('text')
      .attr('class', 'equationText')
      .attr('x', chartWidth - 150)
      .attr('y', marginTop - 30)
      .style('font-family', 'Helvetica')
      .text(equation);
    svg
      .append('text')
      .attr('class', 'equationText')
      .attr('x', chartWidth - 150)
      .attr('y', marginTop - 3)
      .style('font-family', 'Helvetica')
      .text(rsqString);

=======

    // Create equation text and measure its width for proper positioning
    const equationText = svg
      .append("text")
      .attr("class", "equationText")
      .style("font-family", "Helvetica")
      .style("font-size", `${baseFontSize}px`)
      .style("text-anchor", "end")
      .text(equation);

    const rsqText = svg
      .append("text")
      .attr("class", "equationText")
      .style("font-family", "Helvetica")
      .style("font-size", `${baseFontSize}px`)
      .style("text-anchor", "end")
      .text(rsqString);

    // Position at top-right corner with small padding from edge
    const padding = chartWidth * 0.02; // 2% of chart width as padding
    const lineHeight = baseFontSize * 1.2; // Line height for spacing

    equationText
      .attr("x", chartWidth - padding)
      .attr("y", padding + baseFontSize);

    rsqText
      .attr("x", chartWidth - padding)
      .attr("y", padding + baseFontSize + lineHeight);

>>>>>>> 94694ae (refactored styling and cleaned up code)
    // Regression line
    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));
    const lineWrapper = svg
<<<<<<< HEAD
      .append('g')
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');
    lineWrapper
      .append('path')
=======
      .append("g")
      .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");
    lineWrapper
      .append("path")
>>>>>>> 94694ae (refactored styling and cleaned up code)
      .datum([
        { x: firstPointX, y: firstPointY },
        { x: lastPointX, y: lastPointY },
      ])
<<<<<<< HEAD
      .attr('class', 'regressionline')
      .attr('d', line as any);

    // Scatter points
    svg
      .append('g')
      .selectAll('dot')
      .data(dataset)
      .enter()
      .append('circle')
      .attr('cx', function (d: { x: number; y: number }) {
        return xScale(d.x);
      })
      .attr('cy', function (d: { x: number; y: number }) {
        return yScale(d.y);
      })
      .attr('r', 5)
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')')
      .style('fill', '#dc2626');

    return () => {
      // Clear previous SVG before re-rendering
      d3.selectAll('#scatter svg').remove();
    };
  }, [filteredDataX, filteredDataY, chartWidth]);

  return <ScatterContainer id="scatter"></ScatterContainer>;
};

export default Scatterplot;
=======
      .attr("class", "regressionline")
      .attr("d", line as any);

    // Scatter points
    svg
      .append("g")
      .selectAll("dot")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function (d: { x: number; y: number }) {
        return xScale(d.x);
      })
      .attr("cy", function (d: { x: number; y: number }) {
        return yScale(d.y);
      })
      .attr("r", Math.max(3, Math.min(6, chartWidth * 0.008))) // Responsive dot size
      .attr("transform", "translate(" + marginLeft + "," + marginTop + ")")
      .style("fill", "#dc2626");

    return () => {
      // Clear previous SVG before re-rendering
      d3.selectAll("#scatter svg").remove();
    };
  }, [
    filteredDataX,
    filteredDataY,
    chartWidth,
    chartHeight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    baseFontSize,
    titleFontSize,
    tickFontSize,
  ]);

  return (
    <ScatterContainer
      ref={containerRef as React.RefObject<HTMLDivElement>}
      id="scatter"
    />
  );
};

export default Scatterplot;
>>>>>>> 94694ae (refactored styling and cleaned up code)
