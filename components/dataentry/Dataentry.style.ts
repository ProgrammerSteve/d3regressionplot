import styled from 'styled-components';


export const DataContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
<<<<<<< HEAD
  overflow-y: auto;
  max-height: 60vh;
  padding: 16px;
  box-sizing: border-box;
=======
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;

  /* Mobile: compact padding and smaller elements */
  @media (max-width: 767px) {
    padding: 8px;
    border-radius: 6px;
    
    table {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    tbody {
      flex: 1;
      overflow-y: auto;
      display: block;
      
      tr {
        display: table;
        width: 100%;
        table-layout: fixed;
      }
    }
  }

  /* Desktop: normal padding, contained scrolling */
  @media (min-width: 768px) {
    padding: 16px;
    overflow-y: auto;
  }
>>>>>>> 94694ae (refactored styling and cleaned up code)

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
<<<<<<< HEAD
    padding: 8px;
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
    font-size: 14px;
=======
    border-bottom: 1px solid #e5e7eb;
    text-align: center;
  }

  /* Mobile: very compact sizing */
  @media (max-width: 767px) {
    th,
    td {
      padding: 4px 2px;
      font-size: 12px;
    }
  }

  /* Desktop: comfortable sizing */
  @media (min-width: 768px) {
    th,
    td {
      padding: 12px 8px;
      font-size: 14px;
    }
>>>>>>> 94694ae (refactored styling and cleaned up code)
  }

  th {
    background-color: #f3f4f6;
    font-weight: 600;
    color: #374151;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tr:nth-child(even) td {
    background-color: #f9fafb;
  }

  tr:hover td {
    background-color: #eef2ff;
  }
<<<<<<< HEAD
=======

  /* Responsive input fields */
  input {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    text-align: center;
  }

  @media (max-width: 767px) {
    input {
      max-width: 50px;
      font-size: 12px;
      padding: 2px;
    }
  }

  @media (min-width: 768px) {
    input {
      max-width: 80px;
      font-size: 14px;
      padding: 4px;
    }
  }
>>>>>>> 94694ae (refactored styling and cleaned up code)
`;