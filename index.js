
import figlet from 'figlet';
import clear from 'clear';
import chalk from 'chalk';
import fs from 'fs';
import {projectOptions} from './lib/questions.js';
//import files from "./lib/files";
import shelljs from 'async-shelljs';

clear();
console.log(chalk.yellow(figlet.textSync('Leumi-App-Creator-CLI',{horizontalLayout: 'full'})));

const run = async ()=>{
    const questions = await projectOptions();
    console.log(questions);
    await shelljs.asyncExec(`mkdir ${questions.appName} && cd ${questions.appName} && npm init --y && npm i express`);
    await shelljs.asyncExec(`cd ${questions.appName} && mkdir api && cd api && mkdir v1`);
    let data = `const express=require("express");\nconst conf = 'test';`;
    fs.copyFileSync('lib/routes-template.js',`${questions.appName}/api/v1/routes.js`)

    if (questions.nodemonPkg==='Yes'){
        await shelljs.asyncExec(` cd ${questions.appName} && npm i --save nodemon`);
    }

    console.log('finished');
    
};

run();