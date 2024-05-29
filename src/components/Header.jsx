import React from "react";
import styled from "styled-components";

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

const Header = (
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
  setMoney}
) => {
  return (
    <StSection>
      <div className="input-stage">
        <label for="stage-labels">날짜</label>
        <input
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          autoFocus
          value={title}
          onClick={(event) => {
            setDate(event.target.value);
          }}
        />
      </div>
      <div className="input-stage">
        <label for="stage-labels">항목</label>
        <input
          type="text"
          id="item"
          placeholder="항목"
          autoFocus
          value={title}
          onClick={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="input-stage">
        <label for="stage-labels">금액</label>
        <input
          type="text"
          id="price"
          placeholder="지출 금액"
          autoFocus
          value={money}
          onClick={(event) => {
            setMoney(event.target.value);
          }}
        />
      </div>
      <div className="input-stage">
        <label for="stage-labels">내용</label>
        <input
          type="text"
          id="detail"
          placeholder="지출 내용"
          autoFocus
          value={explain}
          onClick={(event) => {
            setExplain(event.target.value);
          }}
        />
      </div>
      <button className="input-save" onClick={submitListHandler}>저장</button>
    </StSection>
  );
};

export default Header;
