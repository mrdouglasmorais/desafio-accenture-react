import styled from 'styled-components'
export const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  color: #3f3f3f;
  line-height: 1.7rem;
  font-family: 'Concert One', cursive;
`


export const CardDashboard = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  width: 85%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: #1d385699 1px 1px 4px 1px;
  height: 300px;
  overflow-y: scroll;

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
  p{
      margin-left: 1em;
  }
  h3{
      margin-left: 1em;
  }
`
