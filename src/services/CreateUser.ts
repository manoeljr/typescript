/**
 * Para criar um usuario
 * name, email, password
 */

interface techObject {
    title: string;
    experince: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | techObject>;
}

export default function createuser({name, email, password}: CreateUserData){
    const user = {
        name,
        email,
        password
    }
    return user;
}