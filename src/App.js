import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import Comments from './Components/Comments/Comments';
import Home from './Components/Home/Home';
import Likes from './Components/Likes/Likes';
import Posts from './Components/Posts/Posts';
import MoviesArray from './MyContex/MoviesArray';

function App() {
  return (
    <div>
      <MoviesArray hierarchy={<Home></Home>}>
      </MoviesArray>
      <Likes></Likes>
      <AddMovie></AddMovie>
      <hr/>
      <Comments/>
      <hr/>
      <Posts/>
    </div>
  );
}

export default App;
