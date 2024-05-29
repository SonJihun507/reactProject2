import React, { useState } from 'react'
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

  &.active {
    background-color: darkgreen;
  }
`;

const StMonthButton = styled.button`
  height: 50px;
  width: 70px;
  margin: 15px;
  background-color: #01b301; 

  
`;



const monthList = ["1월", "2월",  "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

const onClickHander = ({id, active}) => {
    if(active === false) {
        active = true;
    } else {
        active = false;
    }
}

const MonthButtons = ({seletedMonth, setSelectedMonth}) => {
   
    

  return (
    <StSection>
          <div className="month">
            {monthList.map((element) => {
              return <StMonthButton id={element} onClick={onClickHander} seletedMonth >{element}</StMonthButton>
            })}
          </div>
    </StSection>
  )
}

export default MonthButtons