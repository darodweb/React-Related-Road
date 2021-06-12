import './PrimaryButton.scss'

const PrimaryButton = ({ text }) => {

    return (

        <>
            <button type="button" class="btn btn-primary primary-button">{text}</button>
        </>
    );
}

export default PrimaryButton;