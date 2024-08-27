import { useState } from "react";
import ButtonAuthorPicture from "./ButtonAuthorPicture";
import ButtonProjectPicture from "./ButtonProjectPicture";
import ButtonSaveProject from "./ButtonSaveProject";

import PropTypes from 'prop-types';

function Form({ uploadProjectPicture, handleUploadPicture }) {

  const [allValues, setAllValues] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: ''
  });


  const getInputValue = (ev) => {
    const newValues = {...allValues, [ev.currentTarget.id]: ev.target.value};
    setAllValues(newValues);

    console.log(newValues);
  }  

  return (
    <>
    <form className="addForm" onSubmit={ev => {ev.preventDefault();}}>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onChange={getInputValue}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={getInputValue}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={getInputValue}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={getInputValue}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={getInputValue}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={getInputValue}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={getInputValue}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={getInputValue}
        />
      </fieldset>

        <fieldset className="addForm__group--upload">
          <ButtonProjectPicture
            uploadProjectPicture={uploadProjectPicture}
            handleUploadPicture={handleUploadPicture}
          />
          <ButtonAuthorPicture />
          <ButtonSaveProject />
        </fieldset>
      </form>
    </>
  );
}

Form.propTypes = {
  uploadProjectPicture: PropTypes.string.isRequired,
  handleUploadPicture: PropTypes.func.isRequired
};

export default Form;
