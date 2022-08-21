import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


    * {
        font-family: Roboto-Regular !important;
    }

    body {
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    th {
        font-weight: 600 !important;
        white-space: normal ;
    }
    input{
        text-transform:uppercase;
    }
    .css-ylvk31-menu{
    text-transform:uppercase;
}
.css-16s9ooq-singleValue{
    text-transform:uppercase;
}
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    /* Ant Modal Global Style */

    .ant-modal-title {
        font-weight: bold !important;
        font-size: 22px !important;
    }

    .ant-modal-header {
        background-color: #FCFCFF;
        padding: 22px 24px;
    }

    .ant-modal-close {
        top: 10px;
        right: 13px;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper > section   {
        width: 99% !important;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper > section > div  {
        width: 100% !important;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper  {
        width: 20%;
    }

    /* Ant Table Style */

  

    /* Ant Steps Style  */
    .ant-steps-small .ant-steps-item-title {
        font-size: 17px;
    }

    /* InputPhone */
    .react-tel-input .flag-dropdown { display: none; }

    .react-tel-input input.form-control {
        padding: 14px;
        border: 2px solid #a1a4ac;
        border-radius: 4px;
    }

    .react-tel-input input.form-control:focus,
    .react-tel-input input.form-control:hover {
        border-color: #000;
        box-shadow: none;
    }

    .react-tel-input.error input.form-control {
        border-color: #d60915;
    }
    .react-tel-input.error .special-label {
        color: #d60915;
    }

    .react-tel-input .special-label {
        color: #182d37;
        font-size: 15px;
        top: -10px;
    }



    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }

    /**
    * Restore the focus styles unset by the previous rule.
    */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }

    /**
    * Correct the padding in Firefox.
    */

    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }

    /**
    * 1. Correct the text wrapping in Edge and IE.
    * 2. Correct the color inheritance from 'fieldset' elements in IE.
    * 3. Remove the padding so developers are not caught out when they zero out
    *    'fieldset' elements in all browsers.
    */

    legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
    }

    /**
    * Add the correct vertical alignment in Chrome, Firefox, and Opera.
    */

    progress {
    vertical-align: baseline;
    }

    /**
    * Remove the default vertical scrollbar in IE 10+.
    */

    textarea {
    overflow: auto;
    }

    /**
    * 1. Add the correct box sizing in IE 10.
    * 2. Remove the padding in IE 10.
    */

    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    }

    /**
    * Correct the cursor style of increment and decrement buttons in Chrome.
    */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }

    /**
    * 1. Correct the odd appearance in Chrome and Safari.
    * 2. Correct the outline style in Safari.
    */

    [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
    }

    /**
    * Remove the inner padding in Chrome and Safari on macOS.
    */

    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    /**
    * 1. Correct the inability to style clickable types in iOS and Safari.
    * 2. Change font properties to 'inherit' in Safari.
    */

    ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
    }

    /* Interactive
    ========================================================================== */

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
    display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
    display: list-item;
    }

    /* Misc
    ========================================================================== */

    /**
    * Add the correct display in IE 10+.
    */

    template {
    display: none;
    }

    /**
    * Add the correct display in IE 10.
    */

    [hidden] {
    display: none;
    }

    /* REACT-TABLE */
    .react-table-container tbody,
.react-table-container td,
.react-table-container tfoot,
.react-table-container th,
.react-table-container thead,
.react-table-container tr {
    border: 0 solid;
    border-color: inherit;
}

.react-table-container label {
    font-weight: 500;
    margin-bottom: .5rem;
}

.react-table-container {
    /* font-family: pFont, sans-serif !important; */
    font-size: 11px;
    box-sizing: border-box;
    color: #495057;
    --rt-gutter-x: 24px;
    --rt-gutter-y: 0;
    --rt-table-bg: transparent;
    --rt-table-striped-color: #495057;
    --rt-table-striped-bg: #f8f9fa;
    --rt-table-active-color: #495057;
    --rt-table-active-bg: #f8f9fa;
    --rt-table-hover-color: #495057;
    --rt-table-hover-bg: #f8f9fa;
    --rt-table-disable-bg: #e8e8e8;
    --rt-table-select-bg: #8bceedaf;
    --rt-table-page-item-color: #747474;
    --rt-table-primary-color: #35a8df;
}

.react-table-container p {
    margin: 0;
    margin-bottom: .25rem!important;
}

.rt-d-flex { display: flex; }

.rt-d-block { display: block; }

.rt-d-inline-flex { display: inline-flex; }

.rt-mb-2 {margin-bottom: .5rem!important;}

.rt-me-2 {margin-right: .5rem!important;}

.rt-mx-2 {
    margin-right: .5rem!important;
    margin-left: .5rem!important;
}

.rt-d-inline-block {display: inline-block!important;}

.rt-position-relative {position: relative!important;}

.rt-w-100 {width: 100%;}

.rt-justify-content-end {justify-content: flex-end!important;}

.rt-justify-content-center {justify-content: center!important;}

.rt-justify-content-between {justify-content: space-between;}

.rt-align-items-center { align-items: center; }

.rt-align-middle {vertical-align: middle!important;}

.rt-text-align-center { text-align: center; }

.rt-detail-title {
    display: inline-block;
    min-width: 75px;
    font-weight: bold;
    margin-right: 8px;
}

.rt-detail-data {
    display: block;
}

.rt-resize::after {
    content: '';
    position: absolute;
    background: var(--rt-table-active-color);
    width: 12px;
    height: 12px;
    top: -6px;
    right: 1px;
    opacity: 0;
    transform: rotate(45deg);
    transform: .14s linear;
}

.rt-resize:hover::after {
    opacity: 1;
}

@media (min-width: 576px) {
    .rt-d-sm-flex {display: flex;}
    .rt-text-sm-end {text-align: right!important;}
    .rt-justify-content-sm-between {justify-content: space-between;}
    .rt-mb-sm-2 {margin-bottom: .5rem!important;}
    .rt-mb-sm-none {margin-bottom: 0!important;}
    .rt-w-100-sm {width: 100%;}
    .rt-w-sm-auto {width: auto;}
}

.ant-modal-title{
    font-weight: bolder;   
}
.ant-modal-header {
    border-radius: 20px 20px 0 0;
}
.ant-modal-content {
    border-radius: 20px 20px  20px 20px;
}
.ant-modal-body {
    padding: 24px 24px  16px 24px;
}
.ant-card-head-title{
    padding:0px !important;
}
.arrow-page{
    color:#2B4466;
    width: 21px;
    height: 21px;
    cursor:pointer;
}

.pvtDropdownMenu {
    background: white;
    position: absolute;
    width: 100%;
    margin-top: -1px;
    border-radius: 0 0 4px 4px;
    border: 1px solid #a2b1c6;
    border-top: 1px solid #dfe8f3;
    box-sizing: border-box;
    overflow: scroll;
    height: 200px;
}
.pvtUnused{
    display: flex;
    flex-wrap:wrap;
    overflow-y: scroll;
    width: 250px;
    height: 400px;
    margin: 10x 10px;
}
/* se requiere a esta altura debido a que el cliente debe  */
.pvtFilterBox {
    top:475px;
}
/* Works on Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color:  rgba(153, 147, 153, 1) transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 6px;
    height:6px;
}

*::-webkit-scrollbar-track {
    background: transparent;
}

*::-webkit-scrollbar-thumb {
    background-color:  rgba(153, 147, 153, 1);
    border-radius: 20px;
    border: 3px solid transparent;
}

/* spinner load page */
#nprogress .spinner {
  display: block !important;
  position: fixed !important;
  z-index: 1031 !important;
  top: 94vh !important;
  right: 60px !important;
}

`
export default GlobalStyle