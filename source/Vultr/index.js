/* @flow */

import commander from 'commander';
import progress from 'cli-progress';
import log4js from 'log4js';
import {prompt} from 'inquirer';

import {API_ENDPOINT} from './constant';

const logger = log4js.getLogger();

const VERSION = '1.0.1';
const DESCRIPTION = `Vultr API - ${API_ENDPOINT}`;

const bar = new progress.Bar({}, progress.Presets.shades_classic)

bar.start(100, 0);
bar.update(100);
bar.stop();

commander
  .version(VERSION)
  .description(DESCRIPTION);

commander.parse(process.argv);
