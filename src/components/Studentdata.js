import React, { Component } from 'react'
import './filter.css';

class Studentdata extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
           
         ]
      }
   }
   

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
          
        <ul class="menu">
 
 
    <li><a href="http://localhost:3000/Studentdata">Department</a>
    <ul>
            <li><a href="#" class="documents">Information Technology</a></li>
            <li><a href="#" class="messages">Electronics</a></li>
            <li><a href="#" class="signout">Electronics and telecommunication</a></li>
            <li><a href="#" class="signout">Computer</a></li>
        </ul>
        </li>
    <li><a href="#">Class</a>
 
        <ul> 
            <li><a href="#" class="signout">Elite+gold</a></li>
            <li><a href="#" class="messages">Elite+silver</a></li>
            <li><a href="#" class="documents">Elite</a></li>
            <li><a href="#" class="messages">Successfully completed</a></li>
            <li><a href="#" class="messages">Below 40</a></li>
        </ul>
 
    </li>
    <li><a href="#">Year</a>
    <ul> 
            <li><a href="#" class="signout">2016</a></li>
            <li><a href="#" class="messages">2017</a></li>
            <li><a href="#" class="documents">2018</a></li>
            <li><a href="#" class="messages">2019</a></li>
            <li><a href="#" class="signout">2020</a></li>
            <li><a href="#" class="messages">2022</a></li>
            <li><a href="#" class="documents">2023</a></li>
            <li><a href="#" class="messages">2024</a></li>
        </ul>
        </li>
        <li name="abc"><a href="http://localhost:3000/Home">Log-Out</a></li>
        
            <li name="abc"><a href="#">Excel-Download</a></li>
 
    
        <li name="xyz"><a href="#">Go</a></li>
        
</ul> 
      )
   }
}

export default Studentdata