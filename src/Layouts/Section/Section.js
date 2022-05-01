import "./Section.css";
import Card from "../../Components/Card/Card";

const Section = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="card-container">
        {props.notes.map((item) => (
          <Card
            title={item.title}
            content={item.content}
            id={item.id}
            key={item.id}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Section;
