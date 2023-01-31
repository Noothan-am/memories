import {useEffect} from "react";
import {action} from './Actions/actions'
import {useDispatch} from 'react-redux'
import Post from "./Components/Post.jsx";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, [dispatch])
  
  return (
    <div className="App">
      <Post/>
    </div>
  );
}

export default App;
