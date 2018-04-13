class Generators {

  getRandomNumberBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getRandomStringChain() {
    return (
      Math.random().toString(36).substr(2, 10) + " " + Math.random().toString(36).substr(2, 10)
    );
  }

  getRandomString(length) {
    return Math.random().toString(36).substr(2, length);
  }

}

export default new Generators();
