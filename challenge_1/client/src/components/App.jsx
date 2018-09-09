import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      page: 1,
      data: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked!')
    axios.get(`/events?q=${this.state.searchValue}&_page=${this.state.page}&_limit=10`)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
    })
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      searchValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} handleChange={this.handleChange} />
        <EventList data={this.state.data} />
        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}

export default App;