import styled from 'styled-components'

const StyledImage = styled.img`
  width: ${(props) => props.size || '100%'};
  height: fit-content;
`

export { StyledImage }
