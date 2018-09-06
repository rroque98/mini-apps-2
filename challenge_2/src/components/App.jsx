import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.handleDataLineGraph = this.handleDataLineGraph.bind(this);
  }

  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-10-01&end=2018-05-01';
    axios.get(url)
      .then((response) => {
        const dates = Object.keys(response.data.bpi);
        const prices = Object.values(response.data.bpi);
        const data = this.handleDataLineGraph(dates, prices);
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log('Error in retrieving data from coindesk: ', error);
      });
  }

  handleDataLineGraph(xValues, yValues) {
    const data = {
      labels: xValues,
      datasets: [
        {
          label: 'price (USD) / date',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: yValues,
        },
      ],
    };
    return data;
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>
          Bitcoin Price Line Graph
        </h1>
        <Line data={data} />
        <a href="https://www.coindesk.com/price/">
          Powered by CoinDesk
        </a>
      </div>
    );
  }
}

export default App;
