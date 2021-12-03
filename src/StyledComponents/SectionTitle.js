import React from 'react'
import styled from 'styled-components'
import {LineDivider} from './LineDivider'

const SectionContainer = styled.div`
  display: grid;
  width: 300px;
  place-items: center;
  user-select: none;
  font-size: ${(props) =>
    props.fontSize || 'clamp(1.3rem, 3.7vw - 0.3rem, 2rem)'};
  padding: 1rem;
  padding-bottom: 0;
`

const SectionTitle = ({title, fontSize}) => {
  return (
    <SectionContainer fontSize={fontSize}>
      <h1 style={{fontSize: 'inherit'}}>{title}</h1>
      <LineDivider />
    </SectionContainer>
  )
}

export {SectionTitle}
