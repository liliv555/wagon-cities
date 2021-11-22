import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  cityList() {
    return this.props.cities.map((city) => {
      return (
        <City city={city} key={city.name} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.cityList()}
      </ul>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
