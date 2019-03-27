//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '.');

function fromDir(startPath, filter) {
    //console.log('Starting from dir '+startPath+'/');
    
    // console.log(startPath);

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    files.map(file => {
        const filename = path.join(startPath, file);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter);
        } else if (filename.indexOf(filter) >= 0) {
            console.log(filename);
        }
    })
};

fromDir('./', '.md');

const main = () => {
    /* Call Folder Scan
    Foreach Folder => { 
        Read Directory
            Read Subfiles
        Build Json (return)
    } 
    */

    // Convert to Summary
    // Convert to Database 
}

main();


/*
[
    Main_Folder_1: {
        Readme: ''
        Sub_Folder: {
            Readme: ''
        } 
        Sub_Folder: {
            Readme: ''
        } 
    }
     Main_Folder_2: {
        Readme: ''
        Sub_Folder: {
            Readmies: [readme_1, readme_2, readme_3]
        } 
    }
}]
*/