import './UploadButton.scss';

const UploadButton = () => {
    console.log('test');
    return (
        <>

            <input type="file" id="upload-btn" hidden />
            <label className="label-upload-btn" for="upload-btn">
                <i className="bi bi-cloud-upload-fill fs-5"></i>
            </label>

        </>
    );
}

export default UploadButton;