import PropTypes from "prop-types";


function ClearButton ({handleClearForm}) {
   return (
    <button type="button" onClick={handleClearForm} className="button"> 
    Borrar todo

    </button>
   )
}

ClearButton.propTypes = {
handleClearForm: PropTypes.func.isRequired
}
export default ClearButton;