import React from "react";

const Searchbar = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder="Search for contact"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <div className="userchat">
                    <span>Charles</span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;