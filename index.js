import inquirer from 'inquirer';
import { url } from 'inspector';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([
    { message : "Digite a sua URL:",
    name : "URL",} 
])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrcode.png'));
     
    writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    })
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

