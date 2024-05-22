import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components"

const StBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 1px solid black;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StBox>박스</StBox>
    </>
  )
}

export default App
