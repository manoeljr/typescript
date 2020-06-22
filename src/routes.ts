import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// Tipos de tipagem - string, number, boolean, object, array
// Interface, forma de padronizar tipagem e conjuntos de parametros

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'manoel@gmail.com',
        password: '123456',
        techs: [
            'NodeJS', 
            'ReactJS', 
            'React Native',
            {title: 'javascript', experince: 1000}
        ]
    });

    console.log(user.email);

    return response.json({message: 'Hello World'});
};