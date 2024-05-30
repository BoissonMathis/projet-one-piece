import './style.css'
import {CharacterService} from "./Character/Character.service.ts";
import {Character} from "./Character/Character.ts";
import { DisplayInterface } from './DisplayInterface/DisplayInterface.service.ts';

(async ()=>{
    try {
        // on recupere les pokemons de l'api
        const characterApi = await CharacterService.getCharacters()
        console.log(characterApi)
        
        // on map les pokemons de l'api en object pokemon, pour etre sur des données que l'on a
        const charactersObject = characterApi.map(character => CharacterService.mappingCharacterApiToCharacterObject(character))
        
        // on creer un tableau de PokemonDto maintenant que l'on a des données exploitable dans l'application avec PokemonObject
        const tabCharacters = new Character(CharacterService.createArrayCharacterDtoFromCharacterObject(charactersObject))
        console.log(tabCharacters)
        // on creer les elements de l'interface et on les affiche
        DisplayInterface.createCharacterElements(tabCharacters.characters)
    }catch (error) {
        console.log("ERROR => ", error)
    }
})()