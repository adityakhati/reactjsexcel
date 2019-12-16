import React, { Component } from 'react'
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
     
     var null1=1;
     var dep = document.getElementById("dep").value;
     var class1 = document.getElementById("category").value;
     var year = document.getElementById("year").value;
     if(dep==='Select Department' && class1==='Select Class' && year==='Select Year'){
       null1=0;
     }
    fetch('http://localhost:3000/studentdata', { method: 'POST', 
  
    body: JSON.stringify({dep:dep,class1:class1,year:year,null1:null1}), // data can be `string` or {object}!

    headers:{ 'Content-Type': 'application/json' } })

    .then(res => res.json())

    .catch(error => console.error('Error:', error))

    .then(response => console.log('Success:', response));

    
//    document.getElementById("demo").innerHTML = x;

event.preventDefault();
}
   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          <div>
          
          <ul class="menu">
          <li name=""><a href="http://localhost:3000/Dashboard">Dashboard</a></li>
 
          <li name="abc"><a href="http://localhost:3000/Home">Log-Out </a></li>
          
          <li name="abc"><a href="#">Excel-Download </a></li>
          <li name="xyz"><a href="#">Go </a></li>
          </ul>

<div class="row11">
<div class="col11">

<h1></h1>
<div class="select">
  <select name="slct" id="dep">
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
  <select name="slct" id="category">
    <option selected disabled>Select Class</option>
    <option value="FE">FE</option>
    <option value="SE">SE</option>
    <option value="TE">TE</option>
    <option value="BE">BE</option>
  </select>
  
  </div>
  <button class="button button2">Go</button>
  
</div><div class="col11">

<h1></h1>
<div class="select">
  <select name="slct" id="year">
    <option selected disabled>Select Year</option>
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
  <button class="button button2">Excel-Download</button>
  
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