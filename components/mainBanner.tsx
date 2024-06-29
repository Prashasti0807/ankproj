import React from 'react';

const MainBanner = () => {
    return (
        <>
            <div className="row featurette p-5">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Across The Globe<span className="text-muted"></span></h2>
                    <p className="lead">It is an interest based social network platform where people Across The Globe connect, collaborate, learn and inspire each other.</p>
                </div>
                <div className="col-md-5">
                    <img 
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
                        width="500" 
                        height="500" 
                        src="https://play-lh.googleusercontent.com/RO764F99FxUIqPwzvDyENmYvDe4VvGLx0CnSXTRzIsRjBbRcfcMP7JcY_UKsEYmH6A=w526-h296-rw" 
                        alt="Across The Globe"
                    />
                </div>
            </div>

            <hr className="featurette-divider" />

            <hr className="featurette-divider"/>
        </>
    );
};

export default MainBanner;
