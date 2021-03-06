import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import EventList from './EventList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      data: [],
      numOfPages: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { searchValue } = this.state;
    axios.get(`/events?q=${searchValue}&_page=${1}&_limit=10`)
      .then((response) => {
        const numOfPages = Math.ceil(response.headers['x-total-count'] / 10)
        this.setState({
          data: response.data,
          numOfPages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handlePageClick(e) {
    const { searchValue } = this.state;
    const selectedPage = e.selected + 1;
    axios.get(`/events?q=${searchValue}&_page=${selectedPage}&_limit=10`)
      .then(response => this.setState({
        data: response.data
      }));
  }

  render() {
    const { data, numOfPages, } = this.state;
    return (
      <div>
        <h1>
          Historical Events Finder
        </h1>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} />
        <EventList data={data} />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel={<a href="">...</a>}
          breakClassName="spacing"
          pageCount={numOfPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination spacing"
          pageClassName="pagination spacing"
          subContainerClassName="pagination spacing"
          previousClassName="spacing"
          nextClassName="spacing"
          activeClassName="active"
        />
      </div>
    );
  }
}

export default App;
