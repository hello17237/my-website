let numImages, key, fileName;

numImages = 33;  //CHANGE THIS VALUE WHEN YOU CHANGE NUMBER OF PICTURES ON WEBSITE
const IMAGES = {};

for (let i = 0; i < numImages; i++) {
    key = i.toString();
    // fileName = './'.concat(i.toString(), '.JPG'); //for some reason this doesn't work???
    IMAGES[key] = require('./Photos/'.concat(i.toString(), '.JPG')).default; //but this does???
}

// const IMAGES = {
//     '0': require('./0.JPG').default
// }

export default IMAGES;