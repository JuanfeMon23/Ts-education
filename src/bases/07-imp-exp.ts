import heroes,{owners} from '../data/heroes'

export function getHeroById(id: number){
    return heroes.find( hero => hero.id === id);
}


// console.log(getHeroById(4))


// find = to search one date
// filter = to search many dates


export function getHeroesByOwner(owner : string){
    return heroes.find(hero => hero.owner === owner)
}

// console.log(getHeroesByOwner('DC'))