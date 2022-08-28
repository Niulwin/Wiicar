import styled from 'styled-components'

export const Container = styled.div<{ isAuth?: boolean }>`
    display:flex;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    max-width:1440px;
    justify-content:center;
    align-items:center;
    margin:auto;
`