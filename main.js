const RandomImage = {
  container: document.querySelector('.container'),
  unsplashURL: 'https://source.unsplash.com/random/',
  rows: 10,

  createImages() {
    for(let i = 0; i < RandomImage.rows * 3; i++) {
      const img = document.createElement('img')
      img.src = `${RandomImage.unsplashURL}${RandomImage.getRandomSize()}`
      img.alt = `Image ${i + 1}`
      RandomImage.container.appendChild(img)
    }
  },
  
  getRandomSize: () => `${RandomImage.getRandomNumber()}x${RandomImage.getRandomNumber()}`,
  getRandomNumber: () => Math.floor(Math.random() * 10) + 300,
}

RandomImage.createImages()