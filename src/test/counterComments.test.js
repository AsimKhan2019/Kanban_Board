/**
 * @jest-environment jsdom
 */

import InvolvementService from '../modules/InvolvementService.js';

describe('Testing comments counter', () => {
  test('Getting count for comments', () => {
    const data = [
      {
        comment: 'Lets get together',
        username: 'Bob',
        creation_date: '2022-07-27',
      },
      {
        comment: 'Lets get together',
        username: 'Bob',
        creation_date: '2022-07-27',
      },
      {
        comment: 'Lets get together',
        username: 'Bob',
        creation_date: '2022-07-27',
      },
    ];
    // const luanches = LaunchUI.renderLaunches();
    const comments = InvolvementService.getCommentsCount(data);
    expect(comments).toBe(3);
  });
});