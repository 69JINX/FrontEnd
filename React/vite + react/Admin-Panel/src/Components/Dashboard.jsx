import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Sidebar from './Sidebar.jsx';
import DashboardPanel from './Panels/DashboardPanel.jsx';
import { useContext } from 'react';
import { Nav_Context } from '../Context/MyContext';
import Navbar from './Navbar.jsx';
import { Outlet } from 'react-router-dom';



function App() {
  const { Nav_State, setNav_State } = useContext(Nav_Context);


  let NavPanel_width;
  if (Nav_State == true) {
    NavPanel_width = '100%';
  }
  else {
    NavPanel_width = '80%';
  }

  return (
    <>
      <div className='Master d-flex justify-content-between'>
        <Sidebar />
        <div style={{ width: NavPanel_width }}>
          <Navbar />
          <div className='outlet'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
