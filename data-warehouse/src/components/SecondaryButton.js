import './SecondaryButton.scss';

const SecondaryButton = ({ text }) => {
    return (

        <>
            <button type="button" class="btn btn-secondary secondary-button">{text}  <i class="bi bi-chevron-down"></i></button>
        </>
    );
}

export default SecondaryButton;