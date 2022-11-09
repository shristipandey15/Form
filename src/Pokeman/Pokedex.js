import React from 'react';
import Pokecard from '../Pokeman/Pokecard';
function Pokedex() {

    const collection=
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63 ,image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" },
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png"},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png"},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65 ,image:" https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png"},
            ] ;
            
            
   
  return ( <div>
      {collection.map((root)=>{
        return(
            <Pokecard data={root}/>
        );
      })}; 
    </div>
  )

}
export default Pokedex