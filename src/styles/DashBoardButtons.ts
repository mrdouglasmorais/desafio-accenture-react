import styled from 'styled-components'

interface BtnContainerProps {
  backgroundColor: string;
}

export const BtnContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
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
