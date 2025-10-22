'use strict';

const DHT22           = require('./sensors/DHT22');
const Light           = require('./sensors/Light');
const Circuit         = require('./sensors/Circuit');
const IntervalCircuit = require('./sensors/IntervalCircuit');
const Shutter         = require('./controls/Shutter');
const Fan             = require('./controls/Fan');
const Button          = require('./controls/Button');

module.exports = {
  sensors: {
    DHT22,
    Light,
    Circuit,
    IntervalCircuit,
  },
  controls: {
    Shutter,
    Fan,
    Button,
  }
};
