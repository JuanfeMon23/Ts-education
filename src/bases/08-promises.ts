
import { getHeroById } from "./07-imp-exp"
import { Hero } from "../data/heroes"

// new Promise ((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('Mero bien');
//     // }, 2000);

//     setTimeout(() => {
//         reject('Mero mal');
//     }, 2000);
// }).then((message) => console.log(message))
// .catch((errorMessage) => console.log(errorMessage))

const getHeroByIdAsync = (id : number) :Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            hero ? resolve(hero) : reject(`Hero not found ${hero}`)
        },1500)
    })
}

getHeroByIdAsync(9).then(hero => console.log('The name is', hero.name))
.catch(alert);