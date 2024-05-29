
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Header from '../components/Header';
import MonthButtons from '../components/MonthButtons';
import SpendList from '../components/SpendList';


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




const Home = () => {
    const [selectMonth, setSelectedMonth] = useState("")
    
    const [spendList, setList] = useState([
    
    ]);
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("");
    const [explain, setExpain] = useState("");
    const [money, setMoney] = useState("");
    
    
    const submitListHandler = () => {
      const newSpend = {
        id: new Date().getTime(),
        title: title,
        explain: explain,
        money: money,
        active : false
      };   
      setList([...spendList, newSpend]);
    }

    const navigate = useNavigate();
    
    // const [clickOrNot, setClick] = useState(false);
    
    // const clickHander = () => {
    //   if(clickOrNot === false) {
    //     setClick(true);} 
    //   else if (clickOrNot === true){
    //     setClick(false);}
    //   console.log(clickOrNot); 
    // };

    return (
    <>
        <div>here Home</div>
        <button onClick={() => {
        navigate("/DetailPage")
      }}>상세페이지로 이동</button>
        
        <Header />
          
        <MonthButtons element = {<MonthButtons 
          seletedMonth={selectMonth} 
          setseletedMonth={setSelectedMonth} 
          spendList = {spendList} 
          setList = {setList}
          date = {date}
          setDate = {setDate}
          title = {title}
          setTitle = {setTitle}
          explain = {explain}
          setExpain = {setExpain}
          money = {money}
          setMoney = {setMoney}
          submitListHandler = {submitListHandler}
          
        />} />
       
        <SpendList element = {<MonthButtons 
          seletedMonth={selectMonth} 
          setseletedMonth={setSelectedMonth} 
          spendList = {spendList} 
          setList = {setList}
          date = {date}
          setDate = {setDate}
          title = {title}
          setTitle = {setTitle}
          explain = {explain}
          setExpain = {setExpain}
          money = {money}
          setMoney = {setMoney}
          submitListHandler = {submitListHandler}
          
        />} />
       
    </>
  )
}


export default Home