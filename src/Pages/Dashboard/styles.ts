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

export const DashNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    div {
      padding: 1rem;
    }
    button {
      height: 4rem;
      border: none;
      padding: 0 0.5rem;
    }
  }
`