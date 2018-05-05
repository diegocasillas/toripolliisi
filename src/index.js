import Trackpoth from './Trackpoth.js';
import { owner, token } from '../.env.json';
import config from './config.json';

const trackpoth = new Trackpoth(owner, config);

trackpoth.init();
trackpoth.login(token);
