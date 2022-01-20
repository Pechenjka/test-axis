import "./App.css";
import Ruler from "./components/Ruler/Ruler";
import EnterData from "./components/EnterData/EnterData";
import Equation from "./components/Equation/Equation";
import { useState } from "react";

function App() {
  const [correctFirstNum, setCorrectFirstNum] = useState(false);
  const [correctSecondNum, setCorrectSecondNum] = useState(false);

  const [errorFirstNum, setErrorFirstNum] = useState(false);
  const [errorSecondNum, setErrorSecondNum] = useState(false);

  const [numberFirst, setNumberFirst] = useState("7");
  const [numberSecond, setNumberSecond] = useState("4");
  const [sumNumber, setSumNumber] = useState((Number(numberFirst) + Number(numberSecond)).toString());

  return (
    <div className="app">
      <Equation
        sumNumber={sumNumber}
        numberFirst={numberFirst}
        numberSecond={numberSecond}
        correctFirstNum={correctFirstNum}
        correctSecondNum={correctSecondNum}
        errorFirstNum={errorFirstNum}
        errorSecondNum={errorSecondNum}
      />
      <div className="wrapperEnterData">
        <EnterData
          editStyle={false}
          name="numFirst"
          number={numberFirst}
          setCorrectNum={setCorrectFirstNum}
          correctNum={correctFirstNum}
          setError={setErrorFirstNum}
        />
        {correctFirstNum && (
          <EnterData
            editStyle={true}
            name="numSecond"
            number={numberSecond}
            setCorrectNum={setCorrectSecondNum}
            correctNum={correctSecondNum}
            setError={setErrorSecondNum}
          />
        )}
      </div>
      <Ruler />
    </div>
  );
}

export default App;
