import commander from 'commander';
import { version } from 'package.json';

export default const setupCommandLine = () => {
  commander
    .version(version)
    .parse(process.argv);
};
