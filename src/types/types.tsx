



export interface IAddress{
    street: string;
    city: string;
    zipcode: string;
}


export interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress
}

export interface ITodo{
    id: number;
    title: string;
    completed: boolean;
}
export interface IPhoto{
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}