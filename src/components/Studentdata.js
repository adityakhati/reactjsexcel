import React, { Component } from 'react'
import './filter.css';
import './Studentdata.css';

class Studentdata extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
          function myFunction() {
            
          }
         ]
      }
   }


   handleSubmit4(event) {
     
    var x = document.getElementById("slct").value;
            document.getElementById("demo").innerHTML = x;

event.preventDefault();
}
   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div>
          
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
    <option selected disabled>Select Class</option>
    <option value="1">Elite+Gold</option>
    <option value="2">Elite+Silver</option>
    <option value="3">Elite</option>
    <option value="4">Successfully-Completed</option>
    <option value="5">Below-40</option>
  </select>
  </div>
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
</div>

    </div>
    <div>
    <button type="button" onClick={this.handleSubmit4}>Try it</button>
    </div>
    <p id="demo"></p>



</div>
      )
   }
}

export default Studentdata