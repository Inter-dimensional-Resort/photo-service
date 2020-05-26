require('dotenv').config();
const PORT = 8530;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const { PG_STRING } = process.env;

async function imp() {
    const { stdout, stderr } = await exec(`${PG_STRING} \i ../schema.sql`);;
    console.log('stdout:', stdout);
    console.log('stderror:', stderr);
}

imp();