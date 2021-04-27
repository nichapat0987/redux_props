import React, {Component} from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

class App extends Component {
  render(){
    return(
      <Router>
        <div className="App">

          <Switch>
          <Route path="/post"> 
              <AllPost />
          </Route>
          <Route path="/"> 
              <PostForm />
              <br/><br/>
              <button><Link to="/post">Check Posts Results</Link></button>
          </Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
