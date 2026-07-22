import JSDOMEnvironment from 'jest-environment-jsdom'

export default class CustomEnvironment extends JSDOMEnvironment {
  async setup() {
    await super.setup()
    // jest-dom is loaded here so expect is available
  }
}
