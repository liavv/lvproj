

import inquirer from 'inquirer';
export function projectOptions (){

    const regexEngNumbers = /^[a-zA-z/d-]/;
    const questions = [
        {
            name: 'appName',
            type: 'input',
            message: 'enter application name',
            validate: (value)=>{
                if (regexEngNumbers.test(value)){
                    return true;
                }
                else return 'error application name'
            }
        },
        {
            name: 'version',
            type: 'input',
            message: 'enter version'
        },
        {
            name: 'nodemonPkg',
            type: 'list',
            message: 'add nodemon?',
            choices: ['Yes','No'],
            default: 'No'
        }
    ];
    return inquirer.prompt(questions);
}