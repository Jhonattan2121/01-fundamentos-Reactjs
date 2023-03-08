import {Post} from "./Post";
import { Header } from "./components/Header";

import './style.css'

export function App() {
  return (
    <div>
      <Header />
    <Post 
    author="Jhonattan ferri" 
    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum consectetur fugiat aperiam tenetur ipsa! Consequuntur temporibus mollitia assumenda minus culpa excepturi necessitatibus quas nulla animi? Velit delectus rem exercitationem sed!" />
    <Post 
    author="Claro show"
    content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum consectetur fugiat aperiam tenetur ipsa! Consequuntur temporibus mollitia assumenda minus culpa excepturi necessitatibus quas nulla animi? Velit delectus rem exercitationem sed!" />
    
    </div>
  )
}


