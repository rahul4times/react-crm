import React, {Component} from 'react';
import { connect } from 'react-redux';

class PeopleList extends Component {
  list(){
    return this.props.people.map((oneMan)=>{
      return (
        <li key={oneMan.fname}>{oneMan.fname}</li>
      );
    });
  }
  render(){
    return(
      <div>
        <ul>
          {this.list()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    people: state.people
  };
}

export default connect(mapStateToProps)(PeopleList);
