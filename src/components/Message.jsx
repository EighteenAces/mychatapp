import React from "react";

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
            <img src="https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
        </div>
    )
}

export default Message;