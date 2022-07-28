import { Comment } from './Modals.js';

export default class InvolvementAPI {
  static commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1ry5uwpFLkvr8WR9TJVB/comments';

  static likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1ry5uwpFLkvr8WR9TJVB/likes';

  static async fetchComments(launchId) {
    const comments = [];
    await fetch(`${InvolvementAPI.commentsURL}?item_id=${launchId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        json.forEach((c) => {
          comments.push(new Comment(c.creation_date, c.username, c.comment));
        });
      });
    return comments;
  }

  static async postComment(launchId, newcomment) {
    await fetch(InvolvementAPI.commentsURL, {

      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
        username: newcomment.username,
        comment: newcomment.comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static async fetchAllLikes() {
    return fetch(InvolvementAPI.likesURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
}