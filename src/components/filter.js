import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import './filter.css';

class filter extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      if(window.localStorage.getItem("logged") !== "yes"){
        window.location.href = "http://localhost:3001/";
      }
      this.state = { //state is by default an object
        dataLoaded:false,
         students: [
           
         ],
         updatestud: [],
      columns: [
        {
         dataField:'c_name',
         text:"Course Name"
        },
        {
          dataField: 'elite_performance',
          text: 'Elite Performance'
        }, {
          dataField: 'elitegold',
          text: 'Elite Gold'
        }, {
          dataField: 'success_completed',
          text: 'Course Completed'
        },
        {
          dataField: 'below40',
          text: 'Below 40'
        },
        {
          dataField:'elitesilver',
          text:'Elite Silver'
        },
        {
          dataField: 'year',
          text: 'Year'
        }]
      
      }
      this.handleSubmitfilter = this.handleSubmitfilter.bind(this);

   }

   handleSubmitfilter(event) {

    var null1=1;
    var class1 = document.getElementById("certificate").value;
    var year = document.getElementById("year").value;
    if(class1==='Certificate-Type' && year==='Select Year'){
      null1=0;
    }
    const that = this;

   fetch('http://localhost:3000/filterdata', { method: 'POST', 
 
   body: JSON.stringify({class1:class1,year:year,null1:null1}), // data can be `string` or {object}!

   headers:{ 'Content-Type': 'application/json' } })
   .then(res => res.json())
   .then(function (body) {
    that.setState({updatestud:Object.values(body.results)})
  });


   event.preventDefault();
   }

   componentDidMount() {
    const that = this;


    console.log('in here');
    fetch('http://localhost:3000/selectall')
      .then(res => res.json())
      //.then(students=>this.setState({students}));
      .then(function (body) {
        that.setState({ students: body });
        console.log('in here students');
        console.log(that.state.students);
        console.log("refined data  is here")
        that.setState({ updatestud: body.results })
        console.log(that.state.updatestud);
        console.log("This is new data")
        that.setState({updatestud:Object.values(body.results)})
        console.log(that.state.updatestud);
      });
    //      that.state.array =Object.keys(this.state.updatestud);

    // //that.state.array =Object.entries(that.state.updatestud);
    // that.state.array = Object.values(that.state.students);
    // console.log(that.state.array)

  }
  download() {
    // fake server request, getting the file url as response
    setTimeout(() => {
      const response = {
        file: 'http://localhost:3000/analysisreport',
      };
      // server sent the url to the file!
      // now, let's download:
      window.location.href = response.file;
      // you could also do:
      // window.open(response.file);
    }, 100);
  }



   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div class="aditya">
        <ul class="menu">
          <li name=""><a href="http://localhost:3001/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="http://localhost:3001/Home">Log-Out </a></li>
</ul> 
<div class="row11">
<div class="col11">

 

</div>

<div class="col11" style={{marginLeft:"300px", float:"center"}}>

<h1></h1>
<div class="select">
  <select name="slct" id="certificate">
    <option selected>Certificate-Type</option>
    <option value="elitegold">Elite+Gold</option>
    <option value="elitesilver">Elite+Silver</option>
    <option value="elite_performance">Elite</option>
    <option value="success_completed">Successfully-Completed</option>
    <option value="below40">Below-40</option>
  </select>
  
  </div>
  <button class="button button2"style={{marginLeft:"96px", float:"center"}} onClick={this.handleSubmitfilter}>Go</button>
  
</div><div class="col11">

<h1></h1>
<div class="select">
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
  <button class="button button2"style={{marginLeft:"80px", float:"center"}} onClick={this.download}>Excel-Download</button>
  
</div>

    </div>
    <p id="demo"></p>
    <div class="center-col">
<BootstrapTable wrapperClasses="boo" keyField="total_elite" data={this.state.updatestud} columns={this.state.columns} />
</div>
       
</div>
      )
   }
}

export default filter