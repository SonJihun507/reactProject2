import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {
    const navigate = useNavigate();
    
    const [clickOrNot, setClick] = useState(false);
    
    const clickHander = () => {
      if(clickOrNot === false) {
        setClick(true);} 
      else if (clickOrNot === true){
        setClick(false);}
      console.log(clickOrNot); 
    };



    return (
    <>
    <div>Hi DetailPage</div>  
    <button onClick={() => {
        navigate("/");
    }}>홈으로 가기</button>
    <button onClick={clickHander}>클릭실험</button>
    

    </>
  )
}

export default DetailPage