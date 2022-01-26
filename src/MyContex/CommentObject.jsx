import React from 'react';


export const CommentsContex = React.createContext();
const comment = [
    {name: "eliyahu",text:"wow",numberOfViews:99288},
    {name: "eliyahu",text:"wow",numberOfViews:99288},
    {name: "eliyahu",text:"wow",numberOfViews:99288},
    {name: "eliyahu",text:"wow",numberOfViews:99288}
];



function CommentsContexProvider(props){
    return(
        <CommentsContex.Provider value={comment}>
            {props.children}
        </CommentsContex.Provider>
    )
}
export default CommentsContexProvider;
