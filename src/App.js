import React from 'react'
import Default from "./Default";
import {Switch, Route} from "react-router-dom";
import Signin from "./Signin";

function App(){

  return(
    <div>


        <Switch>
            <Route path='/' component={Default} />
            <Route exact path='/Signin' component={Signin} />
        </Switch>


    </div>



  )
}
export default App;
