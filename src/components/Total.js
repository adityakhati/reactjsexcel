import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';

class Total extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
        dataLoaded:false,
         students: [
           
         ],
         elite: 0,
         elitegold:0,
         elitesilver:0,
         success:0,
         below40:0
      }
   }

   componentDidMount(){
       const that=this;
       console.log('in here');
    fetch('http://localhost:3000/piedata')
    .then(res=>res.json())
    //.then(students=>this.setState({students}));
    .then(function(body){
        that.setState({students:Object.values(body.results)});
        that.setState({elite:parseInt(that.state.students[0].total_elite),
         below40:parseInt(that.state.students[0].below40),elitesilver:parseInt(that.state.students[0].totalelitesilver),
         success:parseInt(that.state.students[0].total_success),elitegold:parseInt(that.state.students[0].total_gold)});


    }); 
   }
   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div>
        <ul class="menu">
          <li name=""><a href="http://localhost:3001/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="#">Log-Out </a></li>   
       
      </ul>    
      <div> 
      <PieChart 
                 radius={30}
                 label={true}
        data={[
          { title: 'Elite', value: this.state.elite, color: '#FFFFFF'},
          { title: 'Below40', value: this.state.below40, color: '#C13C37' },
          { title: 'Elitegold', value: this.state.elitegold, color: 'DB2148'},
          { title: 'Elitesilver', value: this.state.elitesilver, color: '#DA2135'},
          { title: 'Success', value: this.state.success, color: '#2A2135'},
        ]}
          />
        </div>    
</div>
      )
   }
}

export default Total