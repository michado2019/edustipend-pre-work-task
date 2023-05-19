import { useState } from 'react';
import './App.css';
import Header from './components/layouts/header/Header';
import Sidebar from './components/layouts/sidebar/Sidebar';
import AppRouter from './components/routes';

function App() {

  //States
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle} />
      <div className='routerSidebar-div'>
      <AppRouter />
      <Sidebar toggle={toggle}/>
      </div>
    </div>
  );
}
export default App;