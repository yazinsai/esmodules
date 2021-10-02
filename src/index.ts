import moment from 'moment';
import hi from './other';
import { obj } from './alt';

const logTime = () => {
  Logger.log(moment.now());
  Logger.log(hi);
  Logger.log(obj);
}
