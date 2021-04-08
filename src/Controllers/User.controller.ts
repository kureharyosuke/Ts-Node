import User, { IUser } from '../Models/User.model'

interface ICreateInput {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName']
}

async function CreateUser({
    email,
    firstName,
    lastName,
}: ICreateInput): Promise<IUser> {
    return User.create({
        email,
        firstName,
        lastName
    })
        .then((data: IUser) => {
            return data
        })
        .catch((error: Error) => {
            throw error;
        })
}

export default {
    CreateUser
}