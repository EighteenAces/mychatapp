import React from "react";

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">Jellie Chat App</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
                <span>Jellie</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;