import React, {useState} from 'react';
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
import useWindowDimensions from './Hooks/useWindowDimensions';
import * as Scroll from 'react-scroll';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {
  const {width} = useWindowDimensions();
  const [scrollToTop, setScrollToTop] = useState(false);

  const scroll = Scroll.animateScroll;
  const Element = Scroll.Element;

  window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 768 && width > 767) {
          setScrollToTop(true);
      }
      else{
          setScrollToTop(false);
      }
  });

  return (
    <>
      <div className="app__wrapper">
        <Navbar />
        <ToastContainer />
        {scrollToTop && <div style={{position:'fixed', bottom:'3rem', right:'3.5rem', zIndex:'2'}}><Element className="navbar__logo" onClick={() => scroll.scrollToTop()} duration={1000} ><i className="fas fa-chevron-circle-up"></i></Element></div>}
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/casestudy/wayside" exact component={Wayside} />
            <Route path="/casestudy/appraisalsystem" exact component={AppraisalSystem} />
            <Route path="/casestudy/autonomousvehicle" exact component={AutonomousVehicle} />
            <Route path="/casestudy/getready" exact component={GetReady} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
