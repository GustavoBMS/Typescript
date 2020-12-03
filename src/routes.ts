import {Request, Response} from 'express';
import createUser from './services/createUser';

export default function returnMessage(request:Request, response:Response) {
  const user = createUser({
    name: 'Gustavo',
    email: 'email@email.com',
    password: '123456',
    techs: [
      'ReactJS',
      'JS',
      'Typescript',
      {title: 'JS',experience: 100}
    ]
  });
  
  return response.json(user);
}