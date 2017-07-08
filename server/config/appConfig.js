import path from 'path';

import Environments from '../constants/Environments';

const baseConfig = {
  rootPath: path.normalize(path.join(`${__dirname}/../..`)),
};

const env = process.env.NODE_ENV || Environments.DEVELOPMENT;
const envConfigs = {
  [Environments.DEVELOPMENT]: {
    port: 3000,
    dbUrl: 'mongodb://localhost/gamerlink',
  },
};

export default {
  ...baseConfig,
  ...envConfigs[env],
};
