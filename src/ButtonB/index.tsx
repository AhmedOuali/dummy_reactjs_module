import React, { FunctionComponent } from 'react'

interface ButtonBProps {
  handleClickB?: (event: any) => void,
  labelB: string
}

const ButtonBStyles = {
  color: 'red',
  backgroundColor: 'white'
}

const Index: FunctionComponent<ButtonBProps> = ({ handleClickB, labelB }) => {
  return (
    <button onClick={handleClickB} style={ButtonBStyles}>{labelB || ""}</button>
  )
}

export default Index
