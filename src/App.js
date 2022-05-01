import "./App.css";
import "./utils/styles/global.css";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Navbar from "./Layouts/Navbar/Navbar";
import NewNote from "./Layouts/New-Note/New_Note";
import Section from "./Layouts/Section/Section";
import { useSelector } from "react-redux";

function App() {
  const notes = useSelector((state) => state.counter.notes);

  return (
    <div className="App">
      <Navbar />
      <div className="display-flex">
        <div className="left-div mt-5">
          <Sidebar />
        </div>
        <div className="right-div">
          <NewNote shadow={true} />
          <div className="pinned-div">
            <Section
              title="Pinned"
              notes={notes.filter((item) => item.pinned)}
            />
          </div>
          <div className="">
            <Section
              title="Others"
              notes={notes.filter((item) => !item.pinned)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
