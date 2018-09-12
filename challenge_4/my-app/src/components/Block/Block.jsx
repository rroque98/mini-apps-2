import React from 'react';
import PropTypes from 'prop-types';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      active: true,
    });
    if (e.target.value === '-1') {
      alert('Game over!');
    }
  }

  render() {
    const { block } = this.props;
    const { active } = this.state;
    if (active) {
      return (
        <button type="button" value={block} onClick={this.handleClick}>
          {block}
        </button>
      );
    }
    return (
      <button type="button" value={block} onClick={this.handleClick}>
        {' '}
      </button>
    );
  }
}

Block.propTypes = {
  block: PropTypes.number.isRequired,
};

export default Block;
