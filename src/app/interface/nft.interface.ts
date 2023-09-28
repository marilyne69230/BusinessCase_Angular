export interface NftInterface {
    id: number;
    name: string;
    price: number;
    date: string;
    pathImage: string;
    likeNft: number;
    idUser:number;
    subCategories:[
        id:number,
        label:string,
    ]
}
