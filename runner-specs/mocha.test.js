var assert = require('assert')
describe('calculator', function () {
  it('should calculate a sum', async () => {
    const inputA = await $('~inputA')
    await inputA.waitForDisplayed(5000)
    await inputA.click()
    try {
      await inputA.addValue('10')
    } catch (e) { }

    const inputB = await $('~inputB')
    await inputB.waitForDisplayed(5000)
    await inputB.click()
    try {
      await inputB.addValue('5')
    } catch (e) { }

    const sumElement = await $('~sum')
    const sum = await sumElement.getText()
    assert.equal(sum, '15') // 10 + 5
  })
})