import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import { Route } from 'react-router-dom';
import AddItem from './add_item';
import SingleItem from './single_item';


const App = () => (
    <div>
        <div className="app">
           
            <Route exact path = "/" component = {List}/>
            <Route path = "/add-item" component ={AddItem}/>
            <Route path = "/item/:id" component = {SingleItem}/>
        </div>
    </div>
);

export default App;
