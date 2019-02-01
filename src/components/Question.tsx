import * as React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 10px;
  height: 50%;
  width: 100%;
  background-color: white;
  font-size: 10rem;
  text-align: center;
`

interface QuestionProps {
  body: string
}

const Question = (props: QuestionProps) => {
  return (
    <StyledDiv>
      <p>{body}</p>
    </StyledDiv>
  )
}

export default Question
