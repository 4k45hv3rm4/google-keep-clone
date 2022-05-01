import "./Sidebar.css";
import "../../utils/styles/global.css";
import Button from "../../Components/Button/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-div">
        <div className="side-btn">
          <Button active={true} title={"Home"} Icon={faHome} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
