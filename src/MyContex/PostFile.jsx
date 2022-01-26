import React from "react";

export const NewPostContex = React.createContext();//creating contex

const postObj = { id: 1, nameWriter: "eliyahu", text: "good", numberOfLikes: 89 };//data that will be expose to the hierarchy of components


function PostContexProvider(props) {
    return(
    <NewPostContex.Provider value={postObj}>
        {props.children}
    </NewPostContex.Provider>
    )
}
export default PostContexProvider;

//the function return a CONTEX which is a way to pass data thru components in more convenievt
//i define *NewPostContex.Provider* and a value key with the data i define, and basicly start a 
//hierarchy of components that will be able to get the data.