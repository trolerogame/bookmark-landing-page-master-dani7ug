import styled from 'styled-components'

export const ContainForm = styled.form`
    background:hsl(231, 69%, 60%);
    /* margin:20px; */
    padding:40px 20px;
    text-align:center;
    p,h2{
        color:#f2f2f2;
    }
    input{
        width:calc(100% - 20px);
        outline:none;
        border:${props => props.error ? '3px solid hsl(0, 94%, 66%)' : 'none'};
        border-bottom:${props => props.error ? '25px solid hsl(0, 94%, 66%)' : 'none'};
        border-radius:5px;
        padding:10px 0;
        height:30px;
        padding-left:20px;
    }
    input::placeholder{
        color:hsl(229, 8%, 60%);
    }
    button{
        margin-top:20px;
        width:100%;
        height:50px;
        padding:10px 0;
    }
    p{
        font-size:20px;
        letter-spacing: 5px;
    }
    #containInput{
        position:relative;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
    }
    img{
        position:absolute;
        width:20px;
        height: 20px;
        object-fit: cover;
        right:10px;
        margin-bottom:20px;
        z-index:1;
    }
    #containInput::after{
        display:block;
        content:"Whoops, make sure it's an email";
        position: absolute;
        font-size:13px;
        font-weight: bold;
        bottom:4px;
        left:10px;
        color:#f2f2f2;
        padding:0 2px;
    }
    @media (min-width: 768px) {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:300px;
        padding:0;
        h2{
            margin-top:0;
            font-size:30px;
        }
        input{
            font-size:17px;
        }
        #containForm{
            display:flex;
            align-items: center;
        }

        input,button{
            margin:0;
        }
        #containButtonInput{
            width: 400px;
            display:grid;
            grid-template-columns: 75% 25%;
            grid-gap:10px;
        }
    }
`
// export const