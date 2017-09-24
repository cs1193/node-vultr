/* @flow */

import commander from 'commander';
import progress from 'cli-progress';
import {prompt} from 'inquirer';

const VERSION = '1.0.1';
const DESCRIPTION = 'Vultr API';

const bar = new progress.Bar({}, progress.Presets.shades_classic)

bar.start(100, 0);
bar.update(100);
bar.stop();

commander
  .version(VERSION)
  .description(DESCRIPTION);

commander.parse(process.argv);
