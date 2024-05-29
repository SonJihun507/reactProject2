import React from 'react'
import styled from 'styled-components'

const StSection = styled.section`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
  background-color: #ffff00aa;
  margin: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StDetailDiv = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  
`;

const StDetailcontent = styled.div`
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const SpendList = (
    {seletedMonth,
    setseletedMonth,
    spendList,
    setList,
    title,
    explain,
    money,
    submitListHandler,
    setDate,
    setTitle,
    setExplain,
    setMoney}) => {
  return (
    <StSection>
          <div className='list'>
            <div className='list-part'>
              <StDetailDiv>
                <StDetailcontent>
                  <span>2024-02-02</span>&ensp;
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt voluptates deleniti id dolorem at, ratione voluptatibus. Vitae quod sed veritatis! Non fuga at deleniti quod cumque quaerat porro. Veniam?</span>
                </StDetailcontent>
                <div>50,000 원</div>
              </StDetailDiv>
            </div>
          </div>
    </StSection>
  )
}

export default SpendList