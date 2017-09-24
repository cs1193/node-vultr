import commander from 'commander';
import {prompt} from 'inquirer';

const VERSION = '1.0.1';
const DESCRIPTION = 'Vultr API';

commander
  .version(VERSION)
  .description(DESCRIPTION);
