import styled,{css,createGlobalStyle} from 'styled-components'

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
    color:hsl(0, 94%, 66%);
    background:hsl(0, 94%, 66%);
    border-radius:5px;
    color:#fff;
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
    text-align: center;
    img{
        width: 350px;
        height: 350px;
        object-fit: cover;
    }
    p{
        color:hsl(229, 31%, 21%);
    }
    h2{
        font-size:25px;
    }
    @media (min-width: 762px){
        display:flex;
        text-align: start;
    }
`