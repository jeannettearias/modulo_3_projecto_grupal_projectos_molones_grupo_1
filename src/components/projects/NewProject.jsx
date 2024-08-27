import Form from "../form/Form";
import Preview from "../preview/Preview";
import PropTypes from 'prop-types';


function NewProject({uploadProjectPicture, handleUploadPicture}) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>

      <Preview />
      <Form uploadProjectPicture={uploadProjectPicture} handleUploadPicture={handleUploadPicture}/>
      
    </main>
  );
}

Form.propTypes = {
  uploadProjectPicture: PropTypes.func.isRequired,
  handleUploadPicture: PropTypes.func.isRequired
};

export default NewProject;
