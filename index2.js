import inquirer from "inquirer";
import { url } from "inspector";
import qr from "qr-image";
import fs from "fs";
import { URL } from "url";

inquirer
  .prompt([
    {message:"type in url:",
    name:"URL",}
  ])
  .then((answers) => {
    const url =answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('url.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
       //Something else went wrong;
    }
  });

 



