import * as core from '@actions/core';
import * as github from '@actions/github';

try {
const nameToGreet = core.getInput('name');
console.log(`Hello ${nameToGreet} from Owner`);

const ouput = `Hello ${nameToGreet} From Owner`;

core.setOutput('greeting',ouput)

    
} catch (error) {
    core.setFailed(error.message)
}