import handler from "../auth/login";
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

describe('testing login file', () => {
  test('handler function', () => {
    let todo = {
            email:"felipelagares@discente.ufg.br" ,
            password: "123456"            
            };

    const req = fetch('http://localhost:3000/api/auth/login', 
        {
          method: 'POST',
          body: JSON.stringify(todo)
        })
    let responseCode = req.StatusCodes

    expect(responseCode).toBe(200);
    });

  test('handler function', () => {
    let todo = {
          email:"felipelagares@discente.ufg.br" ,
          password: "123"            
          };

    const req = fetch('http://localhost:3000/api/auth/login', 
      {
        method: 'POST',
        body: JSON.stringify(todo)
      })
    let responseCode = req.StatusCodes

  expect(responseCode).toBe(400);
  });
  
  });