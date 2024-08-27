import PropTypes from 'prop-types';

function ButtonProjectPicture({ uploadProjectPicture, handleUploadPicture }) {

  //handle project picture
  const handleProjectPicture = (ev) => {
    const newPicture = ev.target.value;

    //trigger the picture changes
    handleUploadPicture(newPicture);
    console.log(newPicture);

  }

  return (
    <>
      <label className="button">
        Subir foto del proyecto
        <input className="addForm__hidden" type="file"
          value={uploadProjectPicture}
          onChange={handleProjectPicture} />
      </label>
    </>
  );
}
ButtonProjectPicture.propTypes = {
  uploadProjectPicture: PropTypes.func.isRequired,
  handleUploadPicture: PropTypes.func.isRequired

};

export default ButtonProjectPicture;