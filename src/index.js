import './style.css';
import launchList from './modules/launchList.js';

window.addEventListener('load', async () => {
  await launchList.getAllLikes();
  await launchList.getLaunch();
});