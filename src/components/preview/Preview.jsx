import PropTypes from 'prop-types';

import ProjectCard from "../card/ProjectCard";

function Preview({ allValues }) {
  return (
    <section className="preview">
      <div className="projectImage"
        style={{ backgroundImage: `url(${allValues.photo})` }}></div>
      <ProjectCard
        allValues={allValues} />
    </section>
  );
}

Preview.propTypes = {
  allValues: PropTypes.object.isRequired,
}

export default Preview;