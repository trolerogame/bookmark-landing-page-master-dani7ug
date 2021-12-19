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
        border:none;
        outline:${props => props.error ? '1px solid hsl(0, 94%, 66%)' : 'none'};
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
        #containInput{
            position:relative;
        }
        img{
            position:absolute;
            width:30px;
            height: 30px;
            object-fit: cover;
            right:0;
            z-index:1;
        }
        input,button{
            margin:0;
        }
        div{
            width: 400px;
            display:grid;
            grid-template-columns: 75% 25%;
            grid-gap:10px;
        }
    }
`
// export const