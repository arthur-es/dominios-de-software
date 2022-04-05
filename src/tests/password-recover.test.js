import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

describe('testing password-recover function', () => {
  test('handler function', () => {
    let todo = {
          email: "felipe.g.lagares@gmail.com"         
            };

    const req = fetch('http://localhost:3000/api/auth/recover-password', 
        {
          method: 'POST',
          body: JSON.stringify(todo)
        })
    let responseCode = req.StatusCodes

    expect(responseCode).toBe(200);
    });
});