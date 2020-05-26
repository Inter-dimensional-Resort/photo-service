require('dotenv').config();
const PORT = 8529;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const { DB_HOST, DB_USER, DB_PASS } = process.env;

async function imp() {
    const { stdout, stderr } = await exec(`arangoimport --server.endpoint tcp://${DB_HOST}:${PORT} --server.username ${DB_USER} --server.password ${DB_PASS} --file "theBigBadBuckaroos.jsonl" --type jsonl --collection listingInfo --progress true`);
    console.log('stdout:', stdout);
    console.log('stderror:', stderr);
}

imp();