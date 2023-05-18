import './App.css';
import Header from './components/layouts/header/Header';
import Sidebar from './components/layouts/sidebar/Sidebar';
import AppRouter from './components/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='routerSidebar-div'>
      <AppRouter />
      <Sidebar />
      </div>
    </div>
  );
}
export default App;