import { type Hero, Owner, heroes } from "./heroes.data.ts";
//2
export const getHeroById = (id: Hero["id"]): Hero => {
    const hero = heroes.find((hero) => hero.id === id);
    if(!hero) throw new Error("Heroes no encontrado ");

    return hero;
};
//3
export const getHeroByOwner = (owner: Hero["owner"]): Hero[] =>{
    const heros = heroes.filter((hero) => hero.owner === owner);
    if(!heros) throw new Error("Propietario no exixte ");
    return heroes;
};



