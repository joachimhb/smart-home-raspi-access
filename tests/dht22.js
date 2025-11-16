'use strict';

const init = require('./init');

const DHT22 = require('../sensors/DHT22');

const gpio = 15;

(async function() {
  console.log(`Starting dht22 test`);

  try {
    const {logger} = await init();

    logger.info(`DHT22`);

    const dht22 = new DHT22({
      logger,
      location: `TEST`,
      interval: 1000,
      gpio: gpio,
      onHumidityChange: async value => {
        logger.info('CHANGE Hum', value);
      },
      onTemperatureChange: async value => {
        logger.info('CHANGE Hum', value);
      },
    });

    dht22.start();
  } catch(err) {
    console.error('Failed to start dht22 test', err);
  }
}());
