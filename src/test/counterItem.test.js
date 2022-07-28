/**
 * @jest-environment jsdom
 */

import InvolvementUI from '../modules/InvolvementUI.js';

 describe('Testing items counter', () => {
  test('Add 1 item to list', () => {
    
    const data = {
      
    };
    
    expect(tasks).toHaveLength(1);
  });

  test('Add 2 items to list', () => {
    
    const data = {
      index: 0,
      description: 'This is just a sample',
      completed: false,
    };
    const data1 = {
      index: 1,
      description: 'This is just another sample',
      completed: false,
    };
    
    expect(tasks).toHaveLength(2);
  });
});