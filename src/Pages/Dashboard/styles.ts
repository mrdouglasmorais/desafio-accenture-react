import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #7cc5ea;
`

export const DashMain = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  height: 100vh;
  overflow-y: auto;
`

export const DashNavigation = styled.div`
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
    padding: 0.5rem;
    height: 100px;
    overflow: auto;
    div {
      padding: 1rem;
    }
    button {
      height: 4rem;
      background: transparent;
      border: none;
      padding: 0 0.5rem;
    }
  }
`
