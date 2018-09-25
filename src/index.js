import Toripolliisi from './Toripolliisi.js';
import dotenv from 'dotenv';
import config from './config.js';

dotenv.load();

const toripolliisi = new Toripolliisi(process.env.OWNER, config);

toripolliisi.init();
toripolliisi.login(process.env.TOKEN);
