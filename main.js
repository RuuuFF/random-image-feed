const RandomImage = {
  container: document.querySelector('.container'),
  input: document.querySelector('#rows'),
  unsplashURL: 'https://source.unsplash.com/random/',
  rows: 10,
  
  getRandomSize: () => `${RandomImage.getRandomNumber()}x${RandomImage.getRandomNumber()}`,
  getRandomNumber: () => Math.floor(Math.random() * 20) + 300,

  changeRowsLength() {
      RandomImage.rows = RandomImage.input.value
      RandomImage.container.innerHTML = ''
      RandomImage.createImages()
  },

  createImages() {
    for(let i = 0; i < RandomImage.rows * 3; i++) {
      const img = document.createElement('img')
      img.src = `${RandomImage.unsplashURL}${RandomImage.getRandomSize()}`
      img.alt = `Image ${i + 1}`
      RandomImage.container.appendChild(img)
    }
  },

  start() {
    RandomImage.input.addEventListener('keydown', event => event.key === 'Enter' ? RandomImage.changeRowsLength() : '')
    RandomImage.createImages()
  }
}

RandomImage.start()