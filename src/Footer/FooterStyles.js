import styled from 'styled-components'

export const Box = styled.div`
  padding: 5px 60px;
  height: min-content;
  position: absolute;
  bottom: 0;
  width: 100%;

  font-family: 'PT mono', 'Helvetica Neue', sans-serif !important;
  background-color: var(--white);
  color: var(--vino);

  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: space-around;
  min-width: 400px;
  text-align: justify;
  margin-left: 10px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

export const Heading = styled.p`
  font-size: 18px;
  color: var(--vino);
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`
