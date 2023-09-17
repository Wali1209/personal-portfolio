import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectURL }) => {
  const handleClick = () => {
    window.open(projectURL, "_blank");
  };
  return (
    <Col size={12} sm={6} md={4} style={{ cursor: "pointer" }}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
