import {React} from "react";
//import Counter from "./components/Counter";
import ListItem from "./components/ListItem";

import '../src/styles/app.css'

function App() {
  return (
    <div className="App">
      <ListItem id='1' title='React is cool' description='I love react' ></ListItem>
    </div>
  );
}

export default App;
