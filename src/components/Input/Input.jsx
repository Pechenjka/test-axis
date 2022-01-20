import './Input.scss'

const Input = ({value, name, onChange, correctNum, maxLength, editStyle}) => {
  return (
    <form className={`form ${editStyle && "form_edit"}`}>
      <input
        className={`form__input ${!correctNum ? "form__input_error" : ""}`}
        value={value}
        name={name}
        type="text"
        maxLength={maxLength}
        onChange={onChange}
      />
    </form>
  );
};

export default Input;