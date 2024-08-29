import ProjectCard from "../card/ProjectCard";
import PropTypes from "prop-types";

function Preview({data}) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <ProjectCard data={data}/>
    </section>
  );
}

Preview.propTypes = {
  data: PropTypes.object.isRequired
};

export default Preview;