import React from "react";

function Avatar(avatar) {
    return(
        <div className="avatar">
            <div className ='picture'>
                <img src={avatar.char} alt="img"></img>
            </div>
            <p>{avatar.name}</p>
        </div>
    );
}

export default Avatar;