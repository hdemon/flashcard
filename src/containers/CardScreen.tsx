import * as React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import styled from 'styled-components'
import { moveToNextCard } from '../actions/card'

const StyledDiv = styled.div``

export interface CardScreenProps {
  onTapCard: any
  cardScreen: any
}

const CardScreen: React.FunctionComponent<CardScreenProps> = ({
  onTapCard,
  cardScreen,
}) => {
  return (
    <StyledDiv>
      <Card
        card={cardScreen.cards[cardScreen.currentCardIndex]}
        onClick={onTapCard}
      />
    </StyledDiv>
  )
}

const mapStateToProps = (state: any) => {
  return {
    cardScreen: state.cardScreen,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTapCard: () => dispatch(moveToNextCard()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardScreen)
