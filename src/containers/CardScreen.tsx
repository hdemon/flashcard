import * as React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import styled from 'styled-components'
import { moveToNextCard } from '../actions/card'

const StyledDiv = styled.div``

export interface CardScreenProps {
  onTapCard: any
  cards: any
  currentCardIndex: any
}

const CardScreen: React.SFC<CardScreenProps> = ({
  onTapCard,
  cards,
  currentCardIndex,
}) => {
  return (
    <StyledDiv>
      <Card
        questionBody={cards[currentCardIndex].question}
        answerBody={cards[currentCardIndex].answer}
        onClick={onTapCard}
      />
    </StyledDiv>
  )
}

const mapStateToProps = (state: any) => {
  const { cards, currentCardIndex } = state.cardScreen
  return { cards, currentCardIndex }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTapCard: () => dispatch(moveToNextCard),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardScreen)
