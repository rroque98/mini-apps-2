import React from 'react';
import PropTypes from 'prop-types';
// import './Row.css';

// const Row = ({ row }) => (
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('clicked');
    this.setState({
      active: true,
    });
  }

  render() {
    const { block } = this.props;
    const { active } = this.state;
    if (active) {
      return (
        <button value={block} onClick={this.handleClick}>
          {block}
        </button>
      )
    } else {
      return (
        <button value={block} onClick={this.handleClick}>
          {}
        </button>
      )
    }
  }
}

Block.propTypes = {
  block: PropTypes.number,
  // handleClick: PropTypes.func,
};

export default Block;
