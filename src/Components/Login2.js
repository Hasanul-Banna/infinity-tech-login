import React from 'react';

const Login2 = () => {
    const style = {
        color: "white",
        padding: "6px 50px",
        marginTop: "20px",
        background: "#31265b",
        border: "none"
    }
    return (
        <div className="container" >
            <div className="row d-flex align-content-center" style={{ height: "100vh" }}>
                <div className="col-md-8"> 
                    <img src="Hello.png" alt="" className="img-fluid" />
                </div>
                <div className="col-md-4 text-center">
                    <img src="logonew.png" alt="logo" />
                    <h2>WELCOME</h2>
                    <div className="d-flex">
                        <i style={{ fontSize: "25px", margin: "5px" }} className="fas fa-mobile-alt"></i>&nbsp;<input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <br />
                    <div className="d-flex">
                        <i style={{ fontSize: "25px", margin: "5px" }} className="fas fa-unlock-alt"></i>&nbsp;<input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button style={style} className="btn rounded-pill">Login</button> <br />

                    <p>Don't have an account? <span style={{color: "#31265b"}}>Register</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login2;