import { test, expect } from '@playwright/test';
import exampleJSON from '../../data/exampleJSON.json';
import { validateCreatedPetResponse } from '../../utils/validationForAPI';

test('POST - Create a new pet ', async ({ request }) => {
  const createResponse = await request.post('https://api.training.testifi.io/api/v3/pet', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: exampleJSON
  });


  validateCreatedPetResponse(createResponse, exampleJSON);

/* 
For simple one-off checks, you can place the soft assertion directly inside the test.step 
instead of creating a dedicated page method.
Example:
    expect.soft(createResponse.ok()).toBeTruthy();
    expect.soft(created).toHaveProperty('id', exampleJSON.id);
    expect.soft(created.name).toBe(exampleJSON.name);
 
*/

});