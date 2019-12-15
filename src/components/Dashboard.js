import React, { Component } from 'react'
import './Dashboard.css';


class Dashboard extends Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           students: [
             
           ]
        }
     }
     
     handleSubmit(event) {
     
          window.location.href = "http://localhost:3000/user";
     
      event.preventDefault();
      }

      handleSubmit1(event) {
     
        window.location.href = "http://localhost:3000/Studentdata";
   
    event.preventDefault();
    }
   
    handleSubmit2(event) {
     
      window.location.href = "http://localhost:3000/filter";
 
  event.preventDefault();
  }
 
     
     
     render() {
        return (

<div>
          <ul class="menu">
 
          <li name="abc"><a href="#">Log-Out </a></li>
          
       
          
       
      </ul> 


            <div class="row1">
            
        
              <div class="column">
                <div class="box-2">
                  <div class="btn1 btn1-two">
                    <span onClick={this.handleSubmit}>Excel-Upload</span>
                  </div>
                </div>
                </div>
           
                <div class="column">
                  <div class="box-2">
                    <div class="btn1 btn1-two">
                       <span onClick={this.handleSubmit1}>Ragistered-Student-Data</span>
                    </div>
                  </div>
                </div>
         
                <div class="column">
                  <div class="box-2">
                    <div class="btn1 btn1-two">
                      <span onClick={this.handleSubmit2}>Analyased-Data</span>
                    </div>
                    </div>
                </div>

            </div>
            </div>
           )
           };
}

export default Dashboard;