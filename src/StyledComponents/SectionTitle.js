import React from 'react'
import styled from 'styled-components'
import { LineDivider } from './LineDivider'

const SectionContainer = styled.div`
  display: grid;
  width: 300px;
  place-items: center;
  user-select: none;
`

const SectionTitle = ({ title }) => {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      <LineDivider />
    </SectionContainer>
  )
}

export { SectionTitle }
