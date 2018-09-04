import Toripolliisi from './Toripolliisi.js';
import { owner, token } from '../.env.json';
import config from './config.js';

const toripolliisi = new Toripolliisi(owner, config);

toripolliisi.init();
toripolliisi.login(token);
