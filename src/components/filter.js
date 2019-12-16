import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import './filter.css';

class filter extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
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
          <li name=""><a href="http://localhost:3000/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="http://localhost:3000/Home">Log-Out </a></li>
          
          
         
              

</ul> 
<div class="row11">
<div class="col11">

<h1></h1>
<div class="select">
  <select name="slct" id="slct">
    <option selected disabled>Select Department</option>
    <option value="Information Technology">Information Technology</option>
    <option value="Electronics">Electronics</option>
    <option value="Electronics and Telecommunication">Electronics and Telecommunication</option>
    <option value="Computer">Computer</option>
  </select>
  </div>
 

</div>


<div class="col11">

<h1></h1>
<div class="select">
  <select name="slct" id="slct">
    <option selected disabled>Certificate-Type</option>
    <option value="1">Elite+Gold</option>
    <option value="2">Elite+Silver</option>
    <option value="3">Elite</option>
    <option value="4">Successfully-Completed</option>
    <option value="5">Below-40</option>
  </select>
  
  </div>
  <button class="button button2">Go</button>
  
</div><div class="col11">

<h1></h1>
<div class="select">
  <select name="slct" id="slct">
    <option selected disabled>Select Year</option>
    <option value="1">2016</option>
    <option value="2">2017</option>
    <option value="3">2018</option>
    <option value="4">2019</option>
    <option value="5">2020</option>
    <option value="6">2021</option>
    <option value="7">2022</option>
    <option value="8">2023</option>
    <option value="9">2024</option>
  </select>
  </div>
  <button class="button button2">Excel-Download</button>
  
</div>

    </div>
    <div>
    <button type="button" onClick={this.handleSubmit4}>Try it</button>
    </div>
    <p id="demo"></p>
<BootstrapTable wrapperClasses="boo" keyField="total_elite" data={this.state.updatestud} columns={this.state.columns} />

       
</div>
      )
   }
}

export default filter