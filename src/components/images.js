const images = [{
  doctor: 'images/doctor.jpg',
  corona: 'images/corona-home.jpg',
  continent: 'images/country.jpg',
  faceMask: 'images/face-mask.jpg',
  faceMask2: 'images/face-mask2.jpg',
  facePost: 'images/face-post.jpg',
  gloves: 'images/gloves.jpg',
  iject: 'images/iject.jpg',
  vaccineBottle: 'assets/images/vaccine-bottle.jpg',
}];

const imgData = images[Math.floor(Math.random() * images.length)];

export default imgData;
