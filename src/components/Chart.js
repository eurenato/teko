import React from 'react';
import Chart from 'react-apexcharts';

class ColumnChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          }
        },
        colors: ['#26408B'],
        dataLabels: {
          enabled: false
        },
        grid: {
            show: false,
          },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        }
      },
      series: [
        {
          name: 'Lixo',
          data: [300, 40, 105, 70, 49, 60, 70, 91, 150]
        }
      ]
    }
  }

  render() {
    return (
      <div className="bar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}

export default ColumnChart;
