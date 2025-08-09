import { ScatterContainer } from './Scatterplot.style';
import * as d3 from 'd3';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';

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

  const width = chartWidth - marginLeft - marginRight;
  const height = chartHeight - marginTop - marginBottom;

  // Scales for x and y axes
  const xScale = d3.scaleLinear().domain([minX, maxX]).range([0, width]);
  const yScale = d3.scaleLinear().domain([minY, maxY]).range([height, 0]);

  // Grid generators
  const xAxisGrid = d3.axisBottom(xScale).tickSize(-height).tickFormat(() => '').ticks(10);
  const yAxisGrid = d3.axisLeft(yScale).tickSize(-width).tickFormat(() => '').ticks(10);

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
  yintercept = (sumY * sumXsq - sumX * sumXY) / (numPoints * sumXsq - sumX ** 2);
  slope = (numPoints * sumXY - sumX * sumY) / (numPoints * sumXsq - sumX ** 2);
  firstPointY = regressionline(firstPointX, slope, yintercept);
  lastPointY = regressionline(lastPointX, slope, yintercept);
  filteredDataX.forEach((_: any, ind: number) => {
    SSR += (filteredDataY[ind] - regressionline(filteredDataX[ind], slope, yintercept)) ** 2;
    SST += (filteredDataY[ind] - mean) ** 2;
  });
  const r_squared = 1 - SSR / SST;

  // Create a dataset for d3. Use an explicit type on the callback to avoid
  // implicit any for the first argument which we ignore.
  const dataset = d3.range(numPoints).map((_d: unknown, ind: number) => {
    return { x: filteredDataX[ind], y: filteredDataY[ind] };
  });

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
      .call(yAxisGrid);

    // Titles and labels
    svg
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
    if (filteredDataX.length > 0) {
      equation = `y=${yintercept.toFixed(2)}+${slope.toFixed(2)}x`;
      rsqString = `r^2=${r_squared.toFixed(2)}`;
    }
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

    // Regression line
    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));
    const lineWrapper = svg
      .append('g')
      .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');
    lineWrapper
      .append('path')
      .datum([
        { x: firstPointX, y: firstPointY },
        { x: lastPointX, y: lastPointY },
      ])
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