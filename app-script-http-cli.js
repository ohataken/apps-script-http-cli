#! /usr/bin/env node

const ArgumentsParser = require("./arguments_parser");
const args = ArgumentsParser.parse(process.argv);
console.log(args);
