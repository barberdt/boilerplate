import path from 'path';

import Environments from '../constants/Environments';

const baseConfig = {
  rootPath: path.normalize(path.join(`${__dirname}/../..`)),
};

const envConfigs = {
  [Environments.DEVELOPMENT]: { port: 3000 },
};

const env = process.env.NODE_ENV || Environments.DEVELOPMENT;

export default {
  ...baseConfig,
  ...envConfigs[env],
};
