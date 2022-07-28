import InvolvementService from './InvolvementService.js';
import { Comment } from './Modals.js';

const getDetails = document.querySelector('.commentList');
const hiddenLaunchId = document.getElementById('launch-id');
const commentsCount = document.querySelector('.comments-count');
const txtname = document.getElementById('txt-visitor');
const txtcomment = document.getElementById('txt-comment');
const btnSaveComment = document.getElementById('btn-save-comment');
btnSaveComment.addEventListener('click', async () => { await InvolvementUI.postComment(); });

export default class InvolvementUI {
  static async renderComments(launchId) {
    hiddenLaunchId.value = launchId;
    getDetails.innerHTML = ' ';
    await InvolvementService.getComments(launchId)
      .then((comments) => {
        commentsCount.innerText = comments.length;
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.innerText = `${comment.creation_date} ${comment.username} ${comment.comment}`;
          getDetails.append(li);
        });
      });
  }

  static clearComments() {
    commentsCount.innerText = 0;
    txtname.value = '';
    txtcomment.value = '';
    hiddenLaunchId.value = '';
  }

  static async postComment() {
    await InvolvementService.postComment(hiddenLaunchId.value,
      new Comment('', txtname.value, txtcomment.value));
  }

  static renderLikes(element, launchId) {
    InvolvementService.getLikes(launchId).then((likes) => {
      element.innerText = likes;
    });
  }
}