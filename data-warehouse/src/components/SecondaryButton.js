import './SecondaryButton.scss';

const SecondaryButton = ({ text }) => {
    return (

        <>
            <button type="button" className="btn btn-secondary secondary-button">{text}  <i className="bi bi-chevron-down"></i></button>
        </>
    );
}

export default SecondaryButton;