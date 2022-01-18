import "./Ruler.scss";
import { rulerInfo } from "../../utils/config";
import RulerInfo from "./RulerInfo/RulerInfo";

const Ruler = () => {
  return (
    <div className="ruler">
      <div className="ruler__container">
        {rulerInfo.map((item) => {
          return <RulerInfo item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Ruler;
