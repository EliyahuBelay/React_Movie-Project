import React,{ useState,useContext } from "react";
import {NewPostContex} from '../../MyContex/PostFile';
import {newContex} from '../../MyContex/NewContex';
// import StateFunction from 'react'

function Message() {
    const postValue = useContext(NewPostContex);
    const contexValue = useContext(newContex);
    // console.log(NewPostContex);
    function ChangeState(event){
        contexValue.firstName = {name:event.target.value}
    }
    function UpdateState(){
        contexValue.setFirstName(contexValue.firstName);
    }

    return (
        <div>
            {console.log(contexValue)}
            <p>This is Message</p>
            <p>{postValue.nameWriter}</p>
            <p></p>
            <input onChange={ChangeState}/>
            <button onClick={UpdateState}>Go</button>
            <p>wow : {contexValue.firstName.name}</p>
        </div>
    )
}
export default Message;

//that function consume the data that i provide in *PostFile* file , and i 
//release the data thru *useContext* hook and then displat it.