/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image"
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message : "type your URL",
        name: 'URL',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = answers.URL;
    var img = qr.image(url);
    img.pipe(fs.createWriteStream("qr_img1.png"));
    fs.writeFile("./URL1.txt",url,(err) =>{
        if(err) throw err;
        console.log("written");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });