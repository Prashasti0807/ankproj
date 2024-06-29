const UploadFile = () => {
    return (
        <>
            <div className="row p-5 d-flex justify-content-center">
                <div className="col-7 p-5 border shadow-lg text-center">
                    <h5 className="fw-normal">We are a startup based in Bangalore and aim to help people excel in their career, professional, and personal lives.</h5>
                    <p>
                        <mark>
                            connect, collaborate and grow
                        </mark>
                    </p>
                    <h3 className="fw-normal text-success"><i className="bi bi-gear-wide-connected p-1"></i>
                        connects students and professionals around the globe</h3>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-share"></i></span>

                        <select className="form-control" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-share"></i></span>

                        <input type="file" className="form-control" id="formfile" accept="app;ication/pdf"/>{" "}
                    </div>

                    <button type="button" className="btn btn-dark">Know More</button>

                </div>
            </div>
        </>
    )
}
export default UploadFile;