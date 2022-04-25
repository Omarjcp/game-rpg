import { useHistory } from "react-router-dom";
import "./index.scss";

export const GoBack = () => {
  const history = useHistory();
  return (
    <button className="buttonBack" onClick={() => history.push("/")}>
      Back Home
    </button>
  );
};
