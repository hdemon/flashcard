import * as React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import styled from 'styled-components'
import { moveToNextCard } from '../actions/card'

const StyledDiv = styled.div``

export interface CardScreenProps {
  onTapCard: any
}

const CardScreen: React.SFC<CardScreenProps> = ({ onTapCard }) => {
  return (
    <StyledDiv>
      <Card questionBody={'hoge'} answerBody={'hoge'} onClick={onTapCard} />
    </StyledDiv>
  )
}

const mapStateToProps = () => {
  return {
    currentCardIndex: 1,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTapCard: dispatch(moveToNextCard),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardScreen)
