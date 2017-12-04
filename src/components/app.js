import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import PeopleList from '../containers/people_list';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <PeopleList />
        <Footer />
      </div>
    );
  }
}

export default App;
