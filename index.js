import * as core from '@actions/core';

const nameToGreet = core.getInput('name');
console.log(`Hello ${nameToGreet} from Owner`);

const ouput = `Hello ${nameToGreet} From Owner`;

core.setOutput('greeting',ouput)