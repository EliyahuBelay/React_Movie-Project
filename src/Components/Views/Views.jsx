import React ,{ useEffect, useState,useContext } from "react";
import { CommentsContex } from "../../MyContex/CommentObject";

function Views(){
    const ObjectUseContex = useContext(CommentsContex);
    const [numViews,setNumViews] = useState(0);
    useEffect(()=>{console.log(numViews)},[numViews]);

    let [nameUser,setNameUser] = useState();
    useEffect(()=>{
        nameUser = prompt("please put your name");
        alert(`Hello User ${nameUser}`);
        setNameUser(nameUser)
    },[]);

    function UpNumViews(){
        setNumViews(numViews+1);
    }
    function DownNumViews(){
        setNumViews(numViews-1);
    }
    function ResetNumViews(){
        setNumViews(numViews-1);
    }
    return(
        <div>
            <p>{numViews}</p>
            <button onClick={UpNumViews}>Up</button>
            <button onClick={DownNumViews}>Down</button>
            <button onClick={ResetNumViews}>Reset</button>
            <p>name user :{nameUser}</p>
            <ul>
                {ObjectUseContex.map(item=> <li>{item.name}</li>)}
            </ul>
        </div>
    )
}
export default Views;