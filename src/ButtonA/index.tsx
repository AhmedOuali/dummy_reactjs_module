import React, { FunctionComponent } from 'react'

interface ButtonBProps {
  handleClickA?: (event: any) => void,
  labelA: string
}

const ButtonBStyles = {
  color: 'yellow',
  backgroundColor: 'black'
}

const Index: FunctionComponent<ButtonBProps> = ({ handleClickA, labelA }) => {
  return (
    <button onClick={handleClickA} style={ButtonBStyles}>{labelA || ""}</button>
  )
}

export default Index
