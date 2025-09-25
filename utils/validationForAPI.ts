import { expect } from '@playwright/test';

export function validateCreatedPetResponse(createResponse, exampleJSON) {
  expect.soft(createResponse.ok()).toBeTruthy();
  return createResponse.json().then(created => {
    expect.soft(created).toHaveProperty('id', exampleJSON.id);
    expect.soft(created.name).toBe(exampleJSON.name);
    return created;
  });
  
}
