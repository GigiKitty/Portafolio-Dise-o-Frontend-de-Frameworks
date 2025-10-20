export interface Hero {
    id: number;
    name: string;
    owner: string;
}

//type Owner ='DC' | 'Marvel' | 'Disney'

export enum Owner {
    DC = 'DC',
    Marvel = 'Marvel'
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner:Owner.DC,
    },
    {
         id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
         id: 3,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
         id: 4,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
         id: 5,
        name: 'Woverine',
        owner: Owner.Marvel,
    },
    {
         id: 6,
        name: 'Ironman',
        owner: Owner.Marvel,
    },
    {
         id: 7,
        name: 'Green Lantern',
        owner: Owner.DC,
    }
];