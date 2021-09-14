import img1 from '../assets/images/doctor.jpg';
import img2 from '../assets/images/corona-home.jpg';
import img3 from '../assets/images/gloves.jpg';
import img4 from '../assets/images/country.jpg';

const images = [{
  doctor: `${img1}`,
  corona: `${img2}`,
  continent: `${img3}`,
  faceMask: `${img4}`,
}];

const imgData = images[Math.floor(Math.random() * images.length)];

export default imgData;
