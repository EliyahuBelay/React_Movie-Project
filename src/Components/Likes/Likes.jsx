import { useState } from "react";

function Likes() {
    const [votes, setVotes] = useState(0);

    function VotesUp() {
        setVotes(votes + 1);
    }

    function VotesDown() {
        setVotes(votes - 1);
    }

    function VotesReset() {
        setVotes(0);
    }
    return (
        <div>
            <p>Likes : {votes}</p>
            <button onClick={VotesUp}>Up</button><button onClick={VotesDown}>Down</button><button onClick={VotesReset}>Reset</button>
        </div>
    )
}
export default Likes;