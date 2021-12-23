import styled,{css} from 'styled-components';


export const ContainInfoHeader = styled.header`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 100px;
    #info{
        display: flex;
        align-items: center;
    }
    img{
        cursor:pointer;
        display: none;
    }
    button{
        height:35px;
        padding:0 30px;
        letter-spacing: 2px;
        font-weight: bold;
        transition: all 0.1s linear;
    }
    button:hover{
        color:hsl(0, 94%, 66%);
        background:none;
        outline:1px  solid hsl(0, 94%, 66%);
    }
    #networks{
        display:none;
    }
    @media (max-width:762px){
        display: block;
        margin:0;
        #info{
            display:none;
        }
        #buttonLogo{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 30px;
        }
        img{
            display:block;
            width: 20px;
            height: 20px;
        }
        #networks{
            display:flex;
            justify-content: center;
            margin-top:150px;
        }
        #networks img{
            margin:0 20px;
            width: 30px;
            height:30px;
            object-fit: cover;
        }
        ${props => !props.close && css`
            display:grid;
            grid-template-columns: 100%;
            grid-template-rows:5% 40% 55%;
            background-color:rgb(40,40,50,.9);
            justify-content: center;
            padding:30px;
            position: fixed;
            z-index:10;
            top:0;
            left:0;
            width: calc(100% - 60px);
            height: 100vh;
            #buttonLogo{
                padding:20px;
            }
            #info{
                display:block;
            }
            button{
                width: 100%;
                border:3px solid #fff;
                background:none;
                height:50px;
                font-size:20px;
                letter-spacing:3px;
                font-weight: 600;
            }
            button:hover{
                color:#f2f2f2;
            }
        `}
    }
`

export const InfoHeader = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:20px;
    p{
        margin:0;
        padding:20px 0;
        border-bottom:1px solid #888;
        color:#f2f2f2;
        text-align:center;
        font-size:20px;
        font-weight:600;
        letter-spacing: 3px;
        cursor:pointer;
        transition:all .1s linear;
    }
    p:hover{
        color:hsl(0, 94%, 66%);
    }
    p:first-child{
        border-top:1px solid #888;
        padding-top:20px;
    }
    @media (min-width: 762px) {
        flex-direction: row;
        margin:0 20px;
        p{
            border:none!important;
            color:#1a1a1a;
            font-size:12px;
            margin:0 10px;
        }
        
    }
`