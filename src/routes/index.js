import React, { Component } from 'react';
import { Router, Switch, Route, IndexRoute } from 'react-router-dom';

//import Header_Logo from'../assets/static/images/faq_header.jpg';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

import '../assets/Faq_Theme/css/reset.css';
import '../assets/Faq_Theme/css/style.css';


import Loader from '../components/layouts/loader';
import Versions from '../components/layouts/attribute/versions';

import Menu from '../containers/faq/menu';
import FaqHome from '../containers/faq';

import My_account from '../containers/faq/my_account';
import Dashboard from '../containers/faq/dashboard';
import Learning_catalog from '../containers/faq/learning_catalog';
import Enrollment from '../containers/faq/enrollment';
import Assessment from '../containers/faq/assessment';
import Certification from '../containers/faq/certification';
import Community from '../containers/faq/community';
import Transportation from '../containers/faq/transportation';
import It from '../containers/faq/it';
import Food from '../containers/faq/food';
import My_learning from '../containers/faq/my_learning';
/*Back-end*/
import Categories from '../containers/back-end/categories';

export default () => {

  return (
    <div>
      <Loader />
      <Versions />
      <header>
      	<h1 className="header_faq">&nbsp;</h1>
      </header>
      <section className="cd-faq">
        <Menu />
        <Switch>
          <Route exact path="/" component={FaqHome} />
          <Route exact path="/my_account:lang" component={My_account} />
          <Route exact path="/dashboard:lang" component={Dashboard} />
          <Route exact path="/learning_catalog:lang" component={Learning_catalog} />
          <Route exact path="/enrollment:lang" component={Enrollment} />
          <Route exact path="/assessment:lang" component={Assessment} />
          <Route exact path="/certification:lang" component={Certification} />
          <Route exact path="/community:lang" component={Community} />
          <Route exact path="/transportation:lang" component={Transportation} />
          <Route exact path="/it:lang" component={It} />
          <Route exact path="/food:lang" component={Food} />
          <Route exact path="/my_learning:lang" component={My_learning} />
          /*Back-end*/
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </section>
      <footer>
        © 2018 YourNextU
      </footer>
    </div>
  )
}
