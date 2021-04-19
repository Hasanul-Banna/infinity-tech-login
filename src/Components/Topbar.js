import React from 'react';

const Topbar = () => {
    const style = {
        background: "#272727",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        color: "#ced2d8",
        fontSize: "20px",
        lineHeight: "50px",
        padding: "0px 20px"
    }
    return (
        <div style={style}>
            <span><i className="fas fa-user-circle"></i> Starbucks Coffee</span>
            <span><i className="fas fa-sign-out-alt"></i> Log out</span>
        </div>
    );
};

export default Topbar;