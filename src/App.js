import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppraisalSystem from './pages/AppraisalSystem/AppraisalSystem';
import AutonomousVehicle from './pages/AutonomousVehicle/AutonomousVehicle';
import Dashboard from './pages/Dashboard/Dashboard';

import { ToastContainer} from 'react-toastify';
import GetReady from './pages/GetReady/GetReady';
import Wayside from './pages/Wayside/Wayside';

function App() {
  return (
    <>
      <div className="app__wrapper">
        <Navbar />
        <ToastContainer />
          <ScrollToTop />
          <Route path="/" exact component={Dashboard} />
          <Route path="/casestudy/wayside" exact component={Wayside} />
          <Route path="/casestudy/appraisalsystem" exact component={AppraisalSystem} />
          <Route path="/casestudy/autonomousvehicle" exact component={AutonomousVehicle} />
          <Route path="/casestudy/getready" exact component={GetReady} />
      </div>
      <Footer />
    </>
  );
}

export default App;
