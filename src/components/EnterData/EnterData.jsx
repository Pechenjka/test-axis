import "./EnterData.scss";
import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../Input/Input";

const EnterData = ({ editStyle, name, number, setCorrectNum, correctNum, setError }) => {
  const { handleChange, values } = useForm();

  const handleCorrect = useCallback(
    (num) => {
      if (values.name === name) {
        if (values.value === num) {
          setCorrectNum(true);
          setError(false);
        } else if (values.value.length > 0 && !correctNum) {
          setError(true);
        } else {
          setCorrectNum(false);
          setError(false);
        }
      }
    },
    [values, setCorrectNum, setError]
  );

  useEffect(() => {
    handleCorrect(number);
  }, [number, handleCorrect]);

  return (
    <div className={`enterData ${editStyle ? "enterData_edit" : ""}`}>
      {!correctNum || values.value === "" ? (
        <Input
          name={name}
          onChange={handleChange}
          value={values.value}
          correctNum={correctNum}
          maxLength="1"
          editStyle={false}
        />
      ) : (
        <p className="enterData__correctNum">{values.value}</p>
      )}
      <div className={`enterData__arrow ${editStyle ? "enterData__arrow_edit" : ""}`} />
    </div>
  );
};

export default EnterData;
