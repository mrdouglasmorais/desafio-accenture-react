import styled from 'styled-components'
import img from "../../assets/feliz.png"

export const BannerMargin = styled.div`
    margin: 0px auto;
    width: 100vw;
    height: 80vh;
    padding: 0px 16px;
    background: #7CC5EA;
`
export const LogoImg= styled.div`

    div{
        display:flex;
        justify-content:center;
    }

    img{
     width:100%;


    }

`
export const Banner = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
`
export const CardAcess = styled.div`
    display:flex;
    justify-content:flex-end;
    button{
        cursor: pointer;
        height: 50px;
        color:#7CC5EA;
        font-family: 'Concert One', cursive;
        font-size: 1.5rem;
        background:none;
        border: none;
        border-radius:20px;
        padding: 10px;
        margin: 10px 10px -80px 0;
        transition:0.1s;
        transition:0.5s;
            &:hover{
            color: white;
            background:#7ceadb;
            }
        }
`
export const CardCadLogin = styled.div`
    margin-top:20px;
    width: 350px;
    max-width: 100%;
    min-height: 450px;
    background:white;
    border-radius: 8px;
    padding: 40px 46px;
    h2{
        color:#696969;
        font-family: 'Concert One', cursive;
    }
    button{
        cursor: pointer;
        background:#7CC5EA;
        border-radius: 20px;
        height: 40px;
        width: 100%;
        border: none;
        margin-top: 40px;
        font-family: Roboto;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: white;
        transition:0.5s;
            &:hover{
            color: white;
            background:#7ceadb;
            }
            &:disabled {
                background: #c1c1c1;
            }
    }
    input{
        margin-top: 20px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-image: initial;
        border-bottom: 1px solid rgb(135, 134, 134);
        width: 100%;
        padding: 10px 32px 10px 14px;
        font-size: 14px;
    }
`
export const Section = styled.div`
    display:flex;
    align-items:center;
    padding:60px;
    background-image: url(${img});
    background-size:50%;
    height: 90vh;
    //width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position:right bottom;
    div{
        width: 50%;
    }
    p{
        text-align: center;
        font-size:2rem;
        }
    button{
        width: 50%;
        height: 47.66px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Concert One', cursive;
        font-size: 1.5rem;
        font-family: Roboto;
        color: white;
        background: #7CC5EA;
        border-radius: 20px;
        border: none;
        margin-top: 40px;
        transition:0.2s;
            &:hover{
            color: white;
            background:#95d4db ;
            }
    }
`

export const StyleMargTop = styled.div`
    border-bottom: 80px solid  #7CC5EA;
    border-right: 100vw solid transparent;
    border-left: 0 solid transparent;
`
export const StyleMargBotton = styled.div`
    border-top: 80px solid  #7CC5EA;
    width: 0;
    height: 0;
    border-right: 0 solid transparent;
    border-left: 100vw  solid transparent;

`
export const CardStud = styled.div`
    width: 100%;
    height: 139vh;

    img{
        width: 100%;
        height: auto;
    }

`
export const CardSection = styled.section`
    width:100%;
    height:200px;
    background:red;

`
