import debug from 'debug';

import { setupCommandLine } from './command';

const log = debug('NodeVultr:Index');

try {
  setupCommandLine();
} catch (error) {
  log(error);
}
