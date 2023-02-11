import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Tools from './WebPages/Tools';
import Home from './WebPages/Home';

function App() {
  const [page, setpage] = useState();
  function Pager(val){
    setpage(val)
  };
  return (
    <div className="App">
      <Navbar PagingFunc={Pager}/>
      {(()=>{
        if (page === "Tools") {
          return <Tools/>
        } else {
          return <Home/>
        }
      })()}
    </div>
  );
}

export default App;
