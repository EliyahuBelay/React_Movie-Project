import React from 'react';
import Message from "../Message/Message";
import PostContexProvider from '../../MyContex/PostFile';
import StateFunction from '../../MyContex/NewContex';

function Posts() {
    return (
        <div>
            <PostContexProvider>
                <StateFunction>
                    <Message />
                </StateFunction>
            </PostContexProvider>
        </div>
    )
}
export default Posts;
//i import the function that return the *NewPostContex.Provider* and inside it i gave
//the component(that why the *Message* component have access to the to the data that i provide in *PostFile* file).