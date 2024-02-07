import {useState} from "react";
import './App.css';
import Box from './component/Box';

/*
1. 박스 2개(타이틀, 사진, 결과)
2. 버튼(가위, 바위, 보)
3. 버튼 클릭하면 클릭한 값이 버튼에 보임
4. 컴퓨터는 랜덤하게 아이템 선택이 된다
5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
6. 테두리 컬러(이기면green, 지면red,  비기면 black)
*/
const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors", 
    img: "https://imageengine.victorinox.com/mediahub/31970/1280Wx1120H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  }
  
  const randomChoice = () => {
    let itemArray = Object.keys(choice);//객체에 키값만 뽑아서 배열로 만들어주는 함수
    console.log("itemsArray", itemArray);
    let randomItem = Math.floor(Math.random()* itemArray.length);    
    console.log("randomItem", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  }

  return (
    <div>   
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
  );
}

export default App;
