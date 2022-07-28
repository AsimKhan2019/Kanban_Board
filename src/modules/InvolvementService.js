import InvolvementAPI from './InvolvementAPI.js';

let likesArray = [];

export default class InvolvementService {
  static getComments = async (launchId) => InvolvementAPI.fetchComments(launchId)

  static postComment = async (launchId, newComment) => {
    await InvolvementAPI.postComment(launchId, newComment);
  }

  static getAllLikes = async () => {
    likesArray = await InvolvementAPI.fetchAllLikes();
  }

  static getLikes = async (launchId) => {
    if (likesArray.length < 1) { await this.getAllLikes(); }
    const record = likesArray.find((l) => l.item_id === launchId);
    return (record != null) ? record.likes : 0;
  }

  static postLike = async (launchId) => {
    await InvolvementAPI.postLike(launchId);
  }
}