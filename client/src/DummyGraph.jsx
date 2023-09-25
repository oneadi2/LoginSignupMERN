import { Component } from 'react';
import Chart from 'chart.js';
class DummyGraph extends Component{
    componentDidMount() {
      this.createDummyGraph();
    }
  
    createDummyGraph() {
      // Dummy data for the chart
      const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
          ]
        }]
      };
  
      // Get the canvas element to render the chart
      const ctx = this.chart.getContext('2d');
  
      // Create a new chart instance
      new Chart(ctx, {
        type: 'bar', // You can change this to other chart types
        data: data
      });
    }
  
    render() {
      return (
        <div>
          <canvas width="400" height="400"></canvas>
        </div>
      );
    }
  }
  
//   export default DummyGraph;
// import React from 'react'

// const DummyGraph = () => {
//   return (
//     <div>DummyGraph</div>
//   )
// }

export default DummyGraph