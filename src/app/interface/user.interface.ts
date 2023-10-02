export interface UserInterface {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    birth: string;
    label: string;
    postalCode: string;
    country: string;
}

export interface Icredentials{
    username: string,
    password: string
}
export interface Itoken{
    token: string
}
