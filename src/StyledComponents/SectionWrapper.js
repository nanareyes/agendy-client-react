import React from 'react'
import styled from 'styled-components'
import { TaggedTitle } from './TaggedTitle'

const SectionContainer = styled.section`
  display: inline-grid;
  padding: 1rem;
  gap: 1rem;

  .tagged-title {
    justify-self: start;
  }
`

const SectionWrapper = ({ title, children }) => {
  return (
    <SectionContainer>
      <TaggedTitle title={title} />
      {children}
    </SectionContainer>
  )
}

export { SectionWrapper }
