import React,{ useContext } from "react";
import {NewPostContex} from '../../MyContex/PostFile';


function Message() {
    const postValue = useContext(NewPostContex)
    // console.log(NewPostContex);
    return (
        <div>
            <p>This is Message</p>
            <p>{postValue.nameWriter}</p>
        </div>
    )
}
export default Message;

//that function consume the data that i provide in *PostFile* file , and i 
//release the data thru *useContext* hook and then displat it.