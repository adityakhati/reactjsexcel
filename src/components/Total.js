import React, { Component } from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import './total.css';
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
        console.log(body);
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
 
          <li name="abc"><a href="http://localhost:3001/Home">Log-Out </a></li>   
       
      </ul>    
      <div className="div1">
<button class="button">Elite</button>
<button class="button button2">EliteSilver </button>
<button class="button button3">EliteGold</button>
<button class="button button4">SuccessfullyCompleted</button>
<button class="button button5">Below40</button>


</div>

      <div> 
      <ReactMinimalPieChart
  animate={true}
  animationDuration={500}
  animationEasing="ease-out"
  cx={50}
  cy={15}
  data={[
    {
      color: '#008CBA',
      title: 'One',
      value:this.state.elitesilver
    },
    {
      color: '#4CAF50',
      title: 'Two',
      value: this.state.elite
    },
    {
      color: '#f44336',
      title: 'Three',
      value: this.state.elitegold
    },
    {
      color:'#e7e7e7',
      title:'four',
      value:this.state.success
    },
    {
      color:'#555555',
      title:'five',
      value:this.state.below40
    }
  ]}
  label={true}
  labelPosition={50}
  labelStyle={{
    fill: '#121212',
    fontFamily: 'sans-serif',
    fontSize: '2px'
  }}
  lengthAngle={360}
  lineWidth={100}
  onClick={undefined}
  onMouseOut={undefined}
  onMouseOver={undefined}
  paddingAngle={0}
  radius={10}
  rounded={false}
  startAngle={0}
  viewBoxSize={[
    100,
    100
  ]}
/>
</div>


</div>
    );
  }
}

   

export default Total