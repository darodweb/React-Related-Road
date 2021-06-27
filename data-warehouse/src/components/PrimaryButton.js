import './PrimaryButton.scss'

const PrimaryButton = ({ text }) => {

    return (

        <>
            <button type="button" className="btn btn-primary primary-button">{text}</button>
        </>
    );
}

export default PrimaryButton;