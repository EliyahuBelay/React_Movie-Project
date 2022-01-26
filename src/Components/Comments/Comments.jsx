import React from "react";
import Views from "../Views/Views";
import CommentsContexProvider from '../../MyContex/CommentObject';

function Comments() {
    return (
        <div>
            <CommentsContexProvider >
                <Views />
            </CommentsContexProvider>
        </div>
    )
}
export default Comments;