import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([{
    /* Pass your questions in here */
    type: 'input',
    name: 'URL',
    message: "Tape Your URL",
    
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    var qr_svg = qr.image(answers.URL, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'png' });
      // Prompt couldn't be rendered in the current environment
    
      // Something else went wrong
    
  })
 

    
 


  