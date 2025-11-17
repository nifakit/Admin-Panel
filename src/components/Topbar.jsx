import React from "react";

function Topbar() {
    return (
        <div className="topbar flex justify-between items-center p-5 bg-[#1d1d1d] border-b border-[#A9A9A9] text-white">
            <h1 className="text-xl font-bold ml-2">Admin Panel</h1>
            <div className="user-info">
                <span>Admin User</span>
            </div>
        </div>
    );
}

export default Topbar;