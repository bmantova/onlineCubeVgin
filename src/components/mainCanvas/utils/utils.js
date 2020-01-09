export default {
  randint (a, b) {
    return Math.floor(Math.random() * (b - a) + a)
  },
  randfloat (a, b) {
    return Math.random() * (b - a) + a
  }
}