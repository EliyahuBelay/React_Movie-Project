import React from 'react';
import Movies from '../Movies/Movies';


class Home extends React.Component {

    render() {
        return (
            <div>
                <p>THIS IS HOME PAGE</p>
                <Movies></Movies>
            </div>
        )
    }
}
export default Home;