import styled from 'styled-components'

export const DashboardContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 3rem 0;
  min-height: 99vh;
`

export const DashMainMobile = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  height: 100vh;
  overflow-y: auto;
`

export const DashNavigationMobile= styled.div`
  position: fixed;
  bottom: 0;
  background: #7cc5ea;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.75);
  nav {
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    padding: 0.2rem;
    height: 90px;
    overflow: auto;
    div {
      padding: 0.2rem;
    }
    button {
      height: 4rem;
      background: transparent;
      border: none;
      padding: 0 0.5rem;
    }
  }
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DashMain = styled.div`
  display: flex;
  width: 100%;
`

export const DashNavigation = styled.div` //-----------
 background:#7CC5EA;
  width: 100vw;
  box-shadow: 5px 5px 10px rgb(211, 205, 205);
  nav{
    display: flex;
    justify-content:space-around;
    align-items:center;
    margin:10px;
      ul{
        display:flex;
        align-items:center;
        li{
        
          list-style:none;
          color:white;
          font-size:1.6rem;
          margin: 0 20px;
          a{ 
            padding:10px 10px 0 10px;
            border-radius:5px;
            transition:0.15s;
            svg{
              margin-top:5px;
              }&:hover{
            background:#1da0e2;
          }
          }

        }
    }
  }
`
export const CardMenuWeb = styled.div`
  max-width: 1320px;
  display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
 

`
export const CardDesc = styled.div`

    width: 17rem;
    height: 9rem;
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
    justify-content: flex-end;
   color:white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 3px 3px 0 0 ;
    }&:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
section{
  flex: 1 1 auto;
  height: 6.1rem;
  border-radius: 0 0 3px 3px;
    min-height: 1px;
    padding: 1.25rem;
    a{
          color:#67676b;
          font-size: 1.5rem;
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
