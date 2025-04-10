/* global Zinnia */

import { getSites } from './lib/sites'
import { measure } from './lib/measure.js'
import { submit } from './lib/submit-measurement.js'
import { pickRandomItem } from './lib/random.js'
import { MEASUREMENT_DELAY } from './lib/constants.js'

let sitesToTest = getSites();

const ipResponse = await fetch('https://api.ipify.org?format=json');
const ipData = await ipResponse.json();

while (true) {
  try {
    const measurement = await measure(
      pickRandomItem(sitesToTest),
      ipData
    )
    console.log('measurement:', measurement)
    await submit(measurement)
    
  } catch (err) {
    console.error(`Error: ${err}`)
  }

  Zinnia.jobCompleted()
  console.log(`Waiting ${MEASUREMENT_DELAY / 1_000} seconds...`)
  await new Promise(resolve => setTimeout(resolve, MEASUREMENT_DELAY))
}
