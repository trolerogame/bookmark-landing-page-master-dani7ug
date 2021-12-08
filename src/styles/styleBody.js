import styled from 'styled-components'

export const InfoHeader = styled.header`
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows:25% 25% 50%;
    background-color:hsl(231, 69%, 60%);
    opacity: .5;
    margin: 10px 100px;
    position: absolute;
    width: 100%;
    height: 100vh;
    button{
        display:none; 
    }
`

export const ContainInfoHeader = styled.div`
    display:flex;
    flex-direction: column;
    p{
        margin:10px 0;
        border-bottom:1px solid #999;
    }
    p:first-child{
        border-top:1px solid #999;
    }
`
export const ButtonRed = styled.button`
    border:none;
    color:hsl(0, 94%, 66%);
    border-radius:5px;
    color:#fff;
    text-align:center;
    height:30px;
    padding:0 10px;
`
export const infoFooter = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
    background:hsl(229, 31%, 21%);
    p{
        color:hsl(229, 8%, 60%);
        margin:20px 0;
    }
    @media (min-width: 768px){
        p{
            margin:0 20px;
        }
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 10px 100px;
    }
`