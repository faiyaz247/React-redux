import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { AddCountAction } from '../../redux';

class CountWithClass extends PureComponent {
  render() {
    const { count, increment, heading } = this.props;
    return (
      <>
        <div>
          {heading}
        </div>
        <p>{`Count is ${count}`}</p>
        <Button onClick={() => increment()}>Increase count</Button>
      </>
    );
  }
}
CountWithClass.propTypes = {
  heading: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  count: state.addCountReducer.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(AddCountAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountWithClass);
