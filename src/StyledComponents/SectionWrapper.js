import React from 'react'
import styled from 'styled-components'
import {TaggedTitle} from './TaggedTitle'

const SectionContainer = styled.section`
  display: inline-grid;
  grid-template-rows: 0.1fr 1fr;
  padding: 1rem;
  gap: 1rem;

  .tagged-title {
    justify-self: start;
  }
`

const SectionWrapper = ({title, children}) => {
  return (
    <SectionContainer>
      {title ? <TaggedTitle title={title} /> : ''}
      {children}
    </SectionContainer>
  )
}

export {SectionWrapper}
