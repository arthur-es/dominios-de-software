import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

describe('testing register function', () => {
  test('handler function', () => {
    let todo = {
          email: "felipe.g.lagares@gmail.com",
          name: "felipe3",
          password: "012345"           
            };

    const req = fetch('http://localhost:3000/api/user/create', 
        {
          method: 'POST',
          body: JSON.stringify(todo)
        })
    let responseCode = req.StatusCodes

    expect(responseCode).toBe(200);
    });

  test('handler function', () => {
    let todo = {
          email: "felipe.g.lagares@gmail.com",
          name: "felipe3",
          password: "012345"            
          };

    const req = fetch('http://localhost:3000/api/user/create', 
      {
        method: 'POST',
        body: JSON.stringify(todo)
      })
    let responseCode = req.StatusCodes

  expect(responseCode).toBe(400);
  });
  
  });