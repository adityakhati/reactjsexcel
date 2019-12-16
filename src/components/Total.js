import React, { Component } from 'react'
import './filter.css';

class Total extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        dataLoaded:false,
         students: [
           
         ]
      }
   }

   componentDidMount(){
       const that=this;
       console.log('in here');
    fetch('http://localhost:3000/selectall')
    .then(res=>res.json())
    //.then(students=>this.setState({students}));
    .then(function(body){
        that.setState({students:body});
        console.log('in here students');

        console.log(that.state.students)
    }); 
   }
   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div>
        <ul class="menu">
          <li name=""><a href="http://localhost:3000/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="#">Log-Out </a></li>
          
       
          
       
      </ul> 

</div>
      )
   }
}

export default Total