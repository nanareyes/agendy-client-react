import React from 'react'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: inline-grid;
  background: white;
  padding: 0.5rem;
  border: 1.5px solid var(--fucsia);
  color: var(--fucsia);
  border-radius: 10px;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: var(--fucsia);
    color: white;
  }

  p {
    all: unset;
  }
`

const TaggedTitle = ({ title }) => {
  return (
    <WrapperContainer>
      <p>{title}</p>
    </WrapperContainer>
  )
}

export { TaggedTitle }
