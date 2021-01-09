import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppraisalSystem from './pages/AppraisalSystem/AppraisalSystem';
import AutonomousVehicle from './pages/AutonomousVehicle/AutonomousVehicle';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';

import { toast, ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <div className="app__wrapper">
        <Navbar />
        <ToastContainer />
          <ScrollToTop />
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/casestudy/appraisalsystem" exact component={AppraisalSystem} />
          <Route path="/casestudy/autonomousvehicle" exact component={AutonomousVehicle} /> */}
          {/* <Route path="/home" exact component={Home} /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
