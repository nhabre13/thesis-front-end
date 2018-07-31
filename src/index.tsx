import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Intro from "./Intro";
import Consent from "./Consent";
import Testing from "./Testing";
import Conclusion from "./Conclusion";


ReactDOM.render((
    <HashRouter>
      <div>
        {/* All routes are placed here */}
        <Route exact path="/" component={Intro} />
        <Route path="/Consent" component={Consent} />
        <Route path="/Testing" component={Testing} />
        <Route path="/Conclusion" component={Conclusion}/>
      </div>
    </HashRouter>
  ), document.getElementById('root'));
