import './DeleteButton.scss';

const DeleteButton = () => {
    return (
        <button className="btn btn-danger delete-button ms-3"><i className="bi bi-trash"></i><span className="delete-button-text"></span> </button>

    );
}

export default DeleteButton;