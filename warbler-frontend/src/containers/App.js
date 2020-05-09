import React from 'react';
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from '../store';
import Navbar from './Navbar';
import Main from './Main';
import jwtDecode from 'jwt-decode'
import{setTokenHeader,setCurrentUser} from '../store/actions/auth';
const store = configureStore();

if(localStorage.jwtToken){
setTokenHeader(localStorage.jwtToken)
try {
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  
} catch (err) {
  store.dispatch(setCurrentUser({}))
}
}


function App() {
  return (
   <Provider store={store}>
     <Router>
       <div>
         <Navbar/>
        <Main/>
       </div>
     </Router>

   </Provider>
  );
}

export default App;
