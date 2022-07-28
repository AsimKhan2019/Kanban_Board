import InvolvementAPI from './InvolvementAPI.js';

let likesArray = [];

export default class InvolvementService {
  static async getComments(launchId) {
    return InvolvementAPI.fetchComments(launchId);
  }

  static async postComment(launchId, newComment) {
    await InvolvementAPI.postComment(launchId, newComment);
  }

  static async getAllLikes() {
    likesArray = await InvolvementAPI.fetchAllLikes();
  }

  static async getLikes(launchId) {
    if (likesArray.length < 1) { await this.getAllLikes(); }
    const record = likesArray.find((l) => l.item_id === launchId);
    return (record != null) ? record.likes : 0;
  }
}