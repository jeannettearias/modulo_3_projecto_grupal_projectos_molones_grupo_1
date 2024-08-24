import { Form } from "react-router-dom";
import Preview from "../preview/Preview";

function NewProject() {
  return (
    <>
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>

      <section className="preview">
        <Preview />
      </section>

      <form className="addForm">
        <Form />
      </form>
    </>
  );
}

export default NewProject;
