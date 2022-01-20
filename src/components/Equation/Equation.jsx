import "./Equation.scss";
import { useForm } from "../../hooks/useForm";
import Input from "../Input/Input";
import { useCallback, useEffect, useState } from "react";

const Equation = ({
  sumNumber,
  numberFirst,
  numberSecond,
  correctSecondNum,
  errorFirstNum,
  errorSecondNum,
  correctNum,
}) => {
  const [correctSumNum, setCorrectSumNum] = useState(false);
  const { handleChange, values } = useForm();

  const handle = useCallback(() => {
    if (sumNumber === values.value && correctSecondNum) {
      setCorrectSumNum(true);
    }
  }, [sumNumber, values, correctSecondNum, setCorrectSumNum]);

  useEffect(() => {
    handle();
  }, [handle]);

  return (
    <div className="equation">
      <p className={`equation__number ${errorFirstNum && "equation__number_firstError"} `}>{numberFirst}</p> +
      <p className={`equation__number ${errorSecondNum && "equation__number_firstError"} `}>{numberSecond}</p> =
      {correctSumNum ? (
        <p className="equation__number">{sumNumber}</p>
      ) : correctSecondNum ? (
        <Input
          name="sumNumber"
          onChange={handleChange}
          value={values.value}
          correctNum={correctNum}
          maxLength="2"
          editStyle={true}
        />
      ) : (
        <p className="equation__number">?</p>
      )}
    </div>
  );
};

export default Equation;
