import styled from 'styled-components'

interface BtnContainerProps {
  backgroundColor: string;
}

export const BtnContainerMobile = styled.div<BtnContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  background: #71b8dc;
  margin: 0.2rem;
`

export const LabelMobile = styled.span`
  font-size: 0.9rem;
  padding-left: 0.1rem;
`

const BtnIcon = styled.span`
  color: white;
  display: flex;
`

export const BtnIconMobile = styled(BtnIcon)`
  font-size: 3rem;
  width: 90px;
`

export const BtnIconDesktop = styled(BtnIcon)`
  font-size: 4rem;
  order: 2;
`

export const BtnContainer = styled.div<BtnContainerProps>`
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  width: 15vw;
  margin: 1rem;
  border-radius: 10px;
`

export const Label = styled.span`
  font-size: 1.25rem;
  padding-left: 0.1rem;
  order: 1;
`

export const ExitBtnContainer = styled.div`
  position: absolute;
  right: 5vw;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: white;
  background: #3C92FD;
  border-radius: 10px;
  border: none;
  margin: 2rem 0 0 0;
  width: 180px;
  max-width: 200px;
  height: 45px;
  transition: all 1s;
  font-size: 1.2rem;
  &:hover {
    height: 75px;
    .exit-button-bottom {
      padding-left: 1rem;
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-top: 1px solid white;
    }
  }
  .exit-button-top {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
  }
  .exit-button-bottom {
    transition: all 1s;
    display: none;
    padding: 0.5rem;
    &:hover {
      flex: 1;
    }
  }
`
  // div {
  //   width: 53px;
  // height: 21px;
  // overflow: hidden;
  // -webkit-transition: width 1s;
  // transition: width 1s;
  // white-space: nowrap;
  //   &:hover {
  //     width: 145px;
  //     -webkit-transition: width 1s;
  //     transition: width 1s;
  //     &::after {
  //       content: 'grelos'
  //     }
  //   }
  // }