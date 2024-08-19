#!/usr/bin/env node
import {name, question} from "../src/cli.js";
import even from "../bin/brain-even.js"
console.log('Welcome to the Brain Games!');
question();
even(name);