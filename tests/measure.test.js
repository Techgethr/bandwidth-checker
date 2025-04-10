import { test } from 'zinnia:test'
import { assertEquals } from 'zinnia:assert'
import { measure } from '../lib/measure.js'

const SITE = 'https://www.wikipedia.org'

test('should return true for a successful measurement', async () => {
  const result = await measure(SITE,"1.1.1.1");
  assertEquals(result.retrievalSucceeded, true)
})
