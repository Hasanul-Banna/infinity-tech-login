import React, { useState } from 'react';
import "./sidebar.css";

const Sidebar = () => {
    const [expand, setExpand] = useState(false);

    return (
        <div className="sidebar" style={!expand ? { width: "42px" } : { width: "240px" }}>
            <div className="text-right">
                <button className="btn btn-dark" onClick={() => setExpand(!expand)}><i class="fas fa-bars"></i></button>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Profile</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Report</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Bulk&nbsp;payment&nbsp;upload</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Users</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Update&nbsp;info</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Demo</p>
            </div>
            <div className="d-flex ">
                <i class="fas fa-clipboard-list"></i> <p>Demo</p>
            </div>
        </div>
    );
};

export default Sidebar;