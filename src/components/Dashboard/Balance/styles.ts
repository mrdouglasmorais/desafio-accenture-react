import styled from 'styled-components'

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99vw;
    margin: 0 auto;
    padding: 0;
    color: #3f3f3f;
    line-height: 1.7rem;
    font-family: 'Concert One', cursive;
`

export const IdentificaUser = styled.div`
    display: flex;
    margin: 0.5rem 0;
    font-size: 1.1rem;
    height: 45px;
    width: 85%;
    background-color: #7cc5ea;
    color: white;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    div {
        span {
            cursor: pointer;
            vertical-align: bottom;
        }
    }
`

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const CardGrupoMov = styled.div`

`

export const CardDashboard = styled.div`
  max-width: 1200px;
  display: flex;
    flex-wrap: wrap;
    margin: 20px auto;


   /* margin: 1rem 0;
    padding: 0.5rem;
    width: 85%;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: #1d385699 1px 1px 4px 1px;
    img {
        margin-left: 0.7rem;
    }
    .title{
        display: flex;
        margin: 0.25rem 0 1rem 0;
        p {
            margin: 0.5rem 0 0 0.75rem;
        }
    }
    p  {
        margin-left: 1em;
    }
    h3  {
        margin-left: 1em;
    }
    .hide {
        background: gray;
        color: gray;
        border-radius: 5px;
        width: 80%;
        transition: all 1s;
    }*/
`

//-----
export const CardDashboardConta = styled.div`
    width: 17rem;
    height: 15rem;
    background: #fff;
  
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;





header{

border-bottom: 1px solid rgba(0,0,0,.125);
padding: 10px;


display: flex;
justify-content: flex-end;
color:black;
font-weight: bold;
font-size: 20px;
border-radius: 3px 3px 0 0 ;
}&:first-child {
border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
/*
   // margin: 1rem 0;
  //  padding: 0.5rem;
 
    // background-color: #f9f9f9;
    // border-radius: 8px;
    //box-shadow: #1d385699 1px 1px 4px 1px;
    img {
        margin-left: 0.7rem;
    }
    .title{
        display: flex;
        margin: 0.25rem 0 1rem 0;
        p {
            margin: 0.5rem 0 0 0.75rem;
        }
    }
    p  {
        margin-left: 1em;
    }
    h3  {
        margin-left: 1em;
    }
    .hide {
        background: gray;
        color: gray;
        border-radius: 5px;
        width: 80%;
        transition: all 1s;
    }*/
`


export const CardDashboardCred = styled.div`
    width: 17rem;
    height: 15rem;
    background: #fff;
  
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
header{

border-bottom: 1px solid rgba(0,0,0,.125);
padding: 10px;


display: flex;
justify-content: flex-end;
color:black;
font-weight: bold;
font-size: 20px;
border-radius: 3px 3px 0 0 ;
}&:first-child {
border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
`
//------
export const CardMenuWeb = styled.div`
  max-width: 1320px;
  display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content:space-evenly;
 

`
export const CardDesc = styled.div`

    width: 17rem;
    height: 15rem;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 20px;
    margin-bottom: 10px;

    background: #fff;
  
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    header{

    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: 10px;
     display: flex;
    justify-content: space-between;
    align-items:center;
    color:#67676b;
    font-weight: bold;
    font-size: 20px;
    border-radius: 3px 3px 0 0 ;
    }
    p{
        color:#67676b;
          font-size: 1.5rem;

    }
section{
  flex: 1 1 auto;
  height: 7.1rem;
  border-radius: 0 0 3px 3px;
    min-height: 1px;
    padding: 1.25rem;
    p{
        color:#67676b;
          font-size: 1rem;

    }
    h3{
          color:#67676b;
          font-size: 1.5rem;
          display: flex;
          justify-content: flex-end;
    }

    span{
   
        display:flex;
        justify-content:center;

        h3{
          color:#67676b;
          font-size: 1.5rem;
          position: absolute;
  z-index: 0;
  


        }
       
      svg{
        opacity: 0.5;
        font-size: 8em;
        transform: rotate(-10deg);
        margin-top: -50px;
        color:white;
      }
    }
}
    `
