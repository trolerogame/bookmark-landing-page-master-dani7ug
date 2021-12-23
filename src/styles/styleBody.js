import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
    }
`
export const ButtonRed = styled.button`
    border:none;
    color:${props => props.color == '#f2f2f2' ? '#111' : '#fff'};
    background:${props => props.color || 'hsl(0, 94%, 66%)'};
    border-radius:5px;
    text-align:center;
    height:30px;
    padding:0 10px;
    cursor: pointer;
`
export const InfoFooter = styled.footer`
    display:flex;
    flex-direction: column;
    align-items: center;
    background:hsl(229, 31%, 21%); 
    padding:30px 0;
    p{
        color:#fff;
        margin:20px 0;
        cursor:pointer;
        transition: all .1s linear;
        text-align: center;
    }
    #info{
        margin:20px 0;
    }
    p:hover{
        color:hsl(0, 94%, 66%);
    }
    img{
        margin:0 15px;
        cursor:pointer;
        padding:3px;
    }
    @media (min-width: 768px){
        p{
            margin:0 20px;
            display:inline;
        }

        #info{
            display:flex;
            align-items: center;
        }

        img{
            margin:0 10px;
        }
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 100px;
    }
`

export const ContainIllustrator = styled.div`
    margin:50px 30px;
    text-align: center;
    display:flex;
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    img{
        width: 350px;
        height: 250px;
        object-fit: cover;
    }
    @media (min-width: 762px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        place-content: center;
        text-align: start;
    }
`
export const ContainText = styled.div`
    p{
    color:hsl(229, 31%, 21%);
    font-weight: 500;
    font-size:18px;
    }
    h2{
        font-size:26px;
    }
    button{
        height:40px;
        margin:0 10px;
    }
    #containButtons{
        display:flex;
        margin:20px 0;
        justify-content:center;
    }
    @media (min-width:762px){
        width:400px;
        margin-left:100px;
    }
`
export const ContainIllustration = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const TextExplain = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:30px 30px;
    margin-top:90px;
    text-align: center;
    p{
        margin-top:0px;
    }
    h2{
        font-size:25px;
    }
    @media (min-width:682px){
        width: 350px;
        margin:40px auto;
    }
`

export const CartExtensionStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:280px;
    margin:30px 0;
    padding:20px 0;
    border-radius:15px;
    -webkit-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    -moz-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.19);
    b{
        font-size:23px;
        margin:20px 0 10px 0;
    }
    p{
        margin:0;
    }
    button{
        margin:50px 0 10px 0!important;
        padding:20px 40px;
        display:flex;
        align-items:center;
    }
    @media (min-width: 762px) {
        margin:0 25px;
        &:first-child{
            transform:translateY(-50px);
        }
        &:nth-child(3){
            transform:translateY(50px);
        }
    }
`

export const ContainDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    button{
        margin:50px 0;
        height:40px;
        padding:0 20px;
    }
`
export const ContainCart = styled(ContainDiv)`
    @media(min-width: 762px){
        flex-direction:row;
        justify-content:center;
        margin:50px 0 150px 0;
    }
`

export const QuestionStyle = styled.div`
    width: 300px;
    margin-bottom:10px;
    -webkit-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    -moz-box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    box-shadow: 2px 7px 10px 1px rgba(0,0,0,0.14);
    .title{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .title p{
        font-weight:bold;
    }
    .text{
        overflow: hidden;
        height:${props => props.close ? 'auto' : '0'};
        transition: all .1s linear;
    }
    .text p{
        letter-spacing:1px;
        color:#000;
    }
    img{
        width:20px;
        height:10px;
        object-fit: cover;
        cursor:pointer;
        transform: rotate(${props => props.close ? '-180deg' : '0'});
        transition: all .1s linear;
    }
    @media(min-width: 762px){
        width:400px;
    }
`

export const ContainRadio = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 762px){
        flex-direction: row;
        justify-content: center;
    }
`

export const RadioButton = styled.button`
    background:#fff;
    border:none;
    padding:15px 0;
    font-size:20px;
    color:hsl(229, 31%, 21%);
    cursor:pointer;
    transition: all .1s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-top:1px solid rgb(200,200,200);
    border-bottom:1px solid rgb(200,200,200);
    &::after{
        content:'';
        display:block;
        margin-top:10px;
        width: ${props => props.num === 'true' ? 'calc(100% - 200px)' : '0'};
        height:5px ;
        background-color:hsl(0, 94%, 66%);
        transition: all .2s linear;
        position: absolute;
        bottom:0;
    }
    @media (min-width: 762px){
        padding:15px 40px;
        border-top:0;
        &::after{
            width: ${props => props.num === 'true' ? '100%' : '0'};
        }
    }
`