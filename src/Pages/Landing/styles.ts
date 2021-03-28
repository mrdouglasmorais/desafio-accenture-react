import styled from 'styled-components'
import img from "../../assets/feliz.png"



export const BannerMargin = styled.div`

margin: 0px auto;
width: 100%;
height: 600px;
padding: 0px 16px;
background: #7CC5EA;


`
export const LogoImg= styled.div`

div{
display:flex;
justify-content:center;

}

 img{
    width:45rem;
    height:15rem;
   // margin-bottom:-50px;

    //overflow-x: hidden;
   // z-index: 9999;
}

`
export const Banner = styled.div`
max-width: 1120px;
margin: 0 auto;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
height: 100%;




`
export const CardAcess = styled.div`
display:flex;
justify-content:flex-end;

    button{
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
        background:#95d4db ;
        }
    }
    
 
`
export const CardCadLogin = styled.div`

h2{
color:#696969;
font-family: 'Concert One', cursive;
}
width: 350px;
max-width: 100%;
min-height: 450px;
background:white;
border-radius: 8px;
padding: 40px 46px;
button{
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
        background:#95d4db ;
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
padding:60px;
background-image: url(${img});
    height: 600px;
    width: 100%;
    width: auto;
    

    background-repeat: no-repeat;
    background-position:right;
    
    span, p{
        font-size:2rem;
    }
button{
    background: #7CC5EA;

    border-radius: 25px;
    height: 47.66px;
    width: 16%;
    border: none;
    margin-top: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 20px;
    color: rgb(155, 155, 155);
    pointer-events: none;
    transition: filter 0.4s ease 0s;
}

`




export const Formblock = styled.div`
   /*


    position: relative;
    width: 100%;
    height: auto;*/
`

export const StyleMargTop = styled.div`

border-bottom: 80px solid  #7CC5EA;

border-right: 100vw solid transparent;
border-left: 0 solid transparent;
`
export const B = styled.div`
/*
display: flex;

width:100vw;
padding: 40px;
color: white;

text-indent: 60px;
text-align: justify;
letter-spacing: 1px;
font-family: 'Roboto', sans-serif;

background: #ADFF2F;
h1{
    color: #7D26CD;
    font-size: 3rem;
}
p{
    color: #551A8B;
    font-size: 1.2rem;
    width:35vw;
}

 aside{
    letter-spacing: 1px;
    margin: 0 auto;
    span{
     font-size: 8rem;
     font-weight:bold;
     color: #8A2BE2;
  }
     }*/
 `

export const StyleMargBotton = styled.div`
border-top: 80px solid  #7CC5EA;
width: 0;
height: 0;
border-right: 0 solid transparent;
border-left: 100vw  solid transparent;

`

export const L = styled.div`
/*

background: pink;
 */
`
export const X = styled.div`
/*

background: #ADFF2F;
 */
`