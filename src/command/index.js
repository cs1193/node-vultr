import debug from 'debug';

import commander from 'commander';
import { version } from '../../package.json';

const log = debug('NodeVultr:Command:Index');

/* eslint-disable-next-line */
export const setupCommandLine = () => {
  commander
    .version(version);

  commander
    .command('hello')
    .action(() => {
      log('Hello');
    });

  commander
    .parse(process.argv);
};
