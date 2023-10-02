import { UserInterface } from "./user.interface";

export interface NftInterface {
    id: number;
    name: string;
    price: number;
    date: string;
    pathImage: string;
    likeNft: number;
    user: {
        id:number;
        email:string;
        firstName:string;
        lastName:string;
    }[];
    subCategories:[
        id:number,
        label:string,
    ]
}
