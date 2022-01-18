import "./RulerInfo.scss";

const RulerInfo = ({ item }) => {
  return (
    <div className="rulerInfo__container">
      <p className="rulerInfo__serif">{item.serif}</p>
      <p className="rulerInfo__num">{item.num}</p>
    </div>
  );
};

export default RulerInfo;
