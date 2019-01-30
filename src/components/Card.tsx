import * as React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  border: 1px solid gray;
  background-color: white;
  font-size: 10rem;
  text-align: center;
`

interface CardProps {
  questionBody: string
  answerBody: string
  onClick: () => void
}

const Card = (props: CardProps) => {
  const { questionBody } = props

  return (
    <StyledDiv onClick={props.onClick}>
      <p>{questionBody}</p>
    </StyledDiv>
  )
}

export default Card
