        //crear un objeto denominado person
const person = {
    name: 'Tony Stark',
    age: 42, 
    key: 'Ironman'
};
const { name, age, key} = person;

console.log({ name, age, key} );
console.log( name, age, key );

const { name: nameHero, age: ageHero, key: keyHero } = person;
console.log({ nameHero, ageHero, keyHero});

        //Crear una interface denominado Hero
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = (hero: Hero) => {
    const { name, age, key, rank } = hero;
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank
    }
}
const context = useContext(person);
console.log(context);

const { keyName, user, rank } = useContext(person);
console.log({ keyName, user, rank });

const { name: nameH, age: ageH } = user;
console.log({ keyName, nameH, ageH, rank });