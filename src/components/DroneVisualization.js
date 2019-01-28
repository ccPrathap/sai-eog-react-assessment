import React, { Component } from 'react';
import { connect } from "react-redux";
import Plot from 'react-plotly.js';
import * as actions from "../store/actions";

class DroneVisualization extends Component {
  render() {
    return (
      <Plot
        data={[
          {type: 'lines', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 700, height: 300, title: 'Drone temperature Plot'} }
      />
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit
  } = state.weather;
  return {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_WEATHER,
      longitude: -95.3698,
      latitude: 29.7604
    })
});

export default connect(
  mapState,
  mapDispatch
)(DroneVisualization);