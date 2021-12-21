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
    img{
        width: 350px;
        height: 250px;
        object-fit: cover;
    }
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

    @media (min-width: 762px){
        display:flex;
        text-align: start;
    }
`
export const ContainIllustration = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    z-index: -1;
`

export const TextExplain = styled.div`
    display:flex;
    flex-direction: column;
    margin:30px 30px;
    margin-top:90px;
    text-align: center;
    p{
        margin-top:0px;
    }
    h2{
        font-size:25px;
    }
`