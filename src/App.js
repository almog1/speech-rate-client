import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <Router>   
    <div>
   <div class="main-layout">
      <div class="loader_bg">
         <div class="loader"><img src={require("./assets/images/loading.gif")} alt="#" /></div>
      </div>
      <header>
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <a href="index.html"><img src={require("./assets/images/logo.png")} alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                              <Link to='/home' class="nav-link">
                                Home
                              </Link> 
                              </li>
                              <li class="nav-item">
                              <Link to='/rate' class="nav-link">
                                Speech rate
                              </Link>  
                              </li>
                              <li class="nav-item">
                              <Link to='/studies' class="nav-link">
                              Studies
                              </Link>
                              </li>
                              <li class="nav-item">                                
                              <Link class="nav-link" to='/contact' activeStyle >
                                Contact Us
                              </Link>
                              </li>
                              <li class="nav-item d_none">
                                 <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      
      <section class="banner_main">
        
      <Switch>
        <Route path='/home' exact component={Home} />   
        <Route path='/rate' exact component={Home} />   
        <Route path='/studies' exact component={Home} />   
        <Route path='/contact' exact component={Contact} />   
      </Switch>

      </section>

   </div>
    </div>
    </Router>
  );
}

export default App;