import LauchAPI from './launchAPI.js';

export default class LaunchService {
  static LaunchList = [];

  static getLaunches = async() => {
    if (LaunchService.LaunchList.length < 1) {
      LaunchService.LaunchList = await LauchAPI.fetchLaunches();
    }
    return LaunchService.LaunchList;
  }

  static getLaunch = (launchId) => {
    return LaunchService.LaunchList.find((l) => l.id === launchId);
  }
}