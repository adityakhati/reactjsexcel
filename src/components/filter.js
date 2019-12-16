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
          <div>
        <ul class="menu">
 
    <li name="cource"><a href="#">Course Name
</a></li>
    <li><a href="#">Department</a>
    <ul>
            <li><a href="#" class="documents">Information Technology</a></li>
            <li><a href="#" class="messages">Electronics</a></li>
            <li><a href="#" class="signout">Electronics and telecommunication</a></li>
            <li><a href="#" class="signout">Computer</a></li>
        </ul>
        </li>
    <li><a href="#">Certificate Type</a>
 
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

        <li name="xyz"><a href="http://localhost:3001/Home">Log-Out</a></li>
        <li name="abc"><button onClick={this.download}>Excel-Download</button></li>
        
              <li name="xyz"><a href="#">GO</a></li>
              

</ul> 

<BootstrapTable wrapperClasses="boo" keyField="total_elite" data={this.state.updatestud} columns={this.state.columns} />

       
</div>
      )
   }
}

export default filter