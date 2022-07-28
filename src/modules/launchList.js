const launchAPIURL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';
const saveAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1ry5uwpFLkvr8WR9TJVB/comments';

const launchList = document.getElementsByClassName('launch-list')[0];
const launchCardTemplate = document.getElementsByClassName('template')[0];

const launchModal = document.getElementById('launch-modal');

const btnSaveComment = document.getElementById('btn-save-comment');
btnSaveComment.addEventListener('click', async () => { await Launch.saveComment(); });

const btnClose = document.querySelector('.close');
btnClose.addEventListener('click', () => Launch.closeModal());

const txtname = document.getElementById('txt-visitor');
const txtcomment = document.getElementById('txt-comment');
const hiddenLaunchId = document.getElementById('launch-id');

export default class Launch {
  constructor(id, name, lsp_name, mission_type, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lsp_name = lsp_name;
    this.mission_type = mission_type;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }

  static launchArray = [];

  static getLaunch = async () => {
    launchList.innerHTML = '';
    Launch.launchArray = [];
    await fetch(launchAPIURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        json.results.forEach((launch) => {
          const launchCard = launchCardTemplate.cloneNode(true);
          launchCard.className = 'launch-card';

          const imgHeader = launchCard.getElementsByClassName('imgHeader')[0];
          imgHeader.style.backgroundImage = `url('${launch.image}')`;

          const h3 = launchCard.getElementsByTagName('h3')[0];
          h3.innerText = launch.name;

          const btnComment = launchCard.querySelector('.comment');
          btnComment.addEventListener('click', () => { Launch.showModal(launch.id); });

          const btnReserve = launchCard.querySelector('.reserve');
          btnReserve.addEventListener('click', () => { Launch.showModal(launch.id); });

          launchList.appendChild(launchCard);
          const launchInfo = new Launch(launch.id, launch.name, launch.lsp_name,
            launch.mission_type, launch.pad,
            launch.location, launch.image);
          Launch.launchArray.push(launchInfo);
        });
      });
  }

  static showModal(launchId) {
    const launchdata = Launch.launchArray.find((l) => l.id === launchId);
    const img = launchModal.querySelector('.launch-img');
    img.style.backgroundImage = `url('${launchdata.image}')`;
    
    const h1 = launchModal.querySelector('h1');
    h1.innerText = launchdata.name;

    const lsp = launchModal.querySelector('.lsp');
    const mission = launchModal.querySelector('.mission');
    const pad = launchModal.querySelector('.pad');
    const location = launchModal.querySelector('.location');

    lsp.innerText = launchdata.lsp_name;
    mission.innerText = launchdata.mission_type;
    pad.innerText = launchdata.pad;
    location.innerText = launchdata.location;
    hiddenLaunchId.value = launchdata.id;
    this.getComments();
    launchModal.style.display = 'block';
  }

  static closeModal() {
    txtname.value = '';
    txtcomment.value = '';
    hiddenLaunchId.value = '';
    launchModal.style.display = 'none';
  }
  /* static showModal = async(launchId, action) => {

  } */

  static async saveComment() {
    await fetch(saveAPIURL, {

      method: 'POST',
      body: JSON.stringify({
        item_id: hiddenLaunchId.value,
        username: `${txtname.value}:`,
        comment: txtcomment.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    txtname.value = '';
    txtcomment.value = '';
  }

  static async getComments() {
    await fetch(`${saveAPIURL}?item_id=${hiddenLaunchId.value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        const getDetails = document.querySelector('.commentList');
        getDetails.innerHTML = ' ';

        json.forEach((comment) => {
          const li = document.createElement('li');
          li.innerText = `${comment.creation_date} ${comment.username} ${comment.comment}`;
          getDetails.append(li);
        });
      });
  }

  /* static saveComment = async(launchId) => {

  } */
}