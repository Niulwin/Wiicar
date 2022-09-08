import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      font-family: Roboto-Regular !important;
      box-sizing: border-box;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* Ant Table Style */
  .tableStyleOne {
    .ant-table-thead > tr > th  {
      font-size: 15px !important;
      font-weight: 600;
    };

    .ant-table-column-title  {
      font-size: 15px !important;
      font-weight: 600;
    };

    .ant-table-tbody > tr > td {
      font-size: 15px !important;
    }
  }
`;

export default GlobalStyle;
