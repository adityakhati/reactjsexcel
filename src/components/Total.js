import React, { Component } from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import './total.css';
class Total extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      if(window.localStorage.getItem("logged") !== "yes"){
        window.location.href = "http://localhost:3001/";
      }
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
      this.handleSubmit8 = this.handleSubmit8.bind(this);

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

   handleSubmit8(event) {

    var null1 = 1;
    const that=this;
    var year = document.getElementById("year").value;
    if (year === 'Select Year') {
      null1 = 0;
    }
    fetch('http://localhost:3000/piedatayear', {
      method: 'POST',

      body: JSON.stringify({year: year, null1: null1 }), // data can be `string` or {object}!

      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(function(body){
        console.log(body.results);
        if(body.results.length>0){
        that.setState({students:Object.values(body.results)});
        that.setState({elite:parseInt(that.state.students[0].total_elite),
         below40:parseInt(that.state.students[0].below40),elitesilver:parseInt(that.state.students[0].totalelitesilver),
         success:parseInt(that.state.students[0].total_success),elitegold:parseInt(that.state.students[0].total_gold)});
        }
        else{
          that.setState({
            elite: 0,
            elitegold:0,
            elitesilver:0,
            success:0,
            below40:0  
        });
        }
    }); 

    event.preventDefault();
  }

   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div>
        <ul class="menu">
          <li name=""><a href="http://localhost:3001/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="http://localhost:3001/Home">Log-Out </a></li>   
       
      </ul>  
      <h1>

      </h1>
      
      <div class="select" style={{marginLeft:"580px", float:"center"}}>
      
<select name="slct" id="year">
    <option selected>Select Year</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
  </select>
  
 </div>
 <button class="button" style={{float:"left",marginLeft:"690px"}} onClick={this.handleSubmit8}>Go</button>



<div className="div1" style={{float:"center",marginTop:"80px"}}>
<button class="button button1">Elite</button>
<button class="button button6">EliteSilver </button>
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
      color: '#87ed18',
      title: 'One',
      value:this.state.elitesilver
    },
    {
      color: '#4ff7d0',
      title: 'Two',
      value: this.state.elite
    },
    {
      color: '#e93df2',
      title: 'Three',
      value: this.state.elitegold
    },
    {
      color:'#f28c0f',
      title:'four',
      value:this.state.success
    },
    {
      color:'#cf3d36',
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
  radius={12}
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