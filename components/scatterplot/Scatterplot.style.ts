import styled from 'styled-components';

interface ScatterContainerProps {
  ref?: React.RefObject<HTMLDivElement>;
  id?: string;
}

export const ScatterContainer = styled.div<ScatterContainerProps>`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  /* Mobile: fit within available space */
  @media (max-width: 767px) {
    width: 100%;
    aspect-ratio: 1;
    max-height: 100%;
  }
  
  /* Desktop: use available space while maintaining aspect ratio */
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 1;
  }

  .svg-content {
    background-color: #f9fafb;
    width: 100%;
    height: 100%;
    display: block;
  }

  .regressionline {
    fill: none;
    stroke: #2563eb;
    stroke-width: 2;
    stroke-dasharray: 5 5;
  }

  .axis {
    color: #6b7280;
    stroke-width: 2px;
  }

  .tickmark-numbers {
    fill: #374151;
    font-size: 12px;
  }

  .axis-grid-background-color {
    fill: #f3f4f6;
  }

  .equationText {
    fill: #374151;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  .titleText {
    fill: #111827;
    font-family: Helvetica, Arial, sans-serif;
    text-anchor: middle;
    font-size: 18px;
    font-weight: 600;
  }

  .AxisText {
    fill: #374151;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    text-anchor: middle;
  }
`;