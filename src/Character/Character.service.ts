import {http} from "../Http/axios.instance.ts";
import { CharacterApi, CharacterObject } from "./Character.type.ts";
import { CharacterDto } from "./CharacterDto.ts";

/**
 * class qui permet d'avoir des fonctions qui sont liées directement aux characters
 */
export class CharacterService {
    
    /**
     * permet de récupérer la liste des personnages sur l'api "One Piece"
     * on utilise http qui est une instance de axios que l'on a créé dans le fichier ./Http/axios.instance.ts
     */
    static getCharacters = async () => {
        try {
            // requete get sur l'api sur l'url " base " + /characters/en
            const response = await http.get<CharacterApi[]>('characters/en')
            // console.log(response)
            return response.data
        } catch (error) {
            console.log("ERROR => ", error)
            throw error
        }
    }
    
    /**
     * mapping
     * retourne un CharacterObject à partir d'un CharacterApi
     * @param character
     */
    static mappingCharacterApiToCharacterObject = (character: CharacterApi):CharacterObject => {
    
        return {
            id: character.id ?? 0,
            name: character.name ?? '',
            size: character.size ?? '',
            age: character.age ?? '',
            bounty: character.bounty ?? '',
            crew: character.crew ?? {},
            fruit: character.fruit ?? {},
            job: character.job ?? '',
            status: character.status ?? ''
        }
    }
    
    /**
     * permet de créer un tableau de CharacterDto à partir d'un tableau de CharacterObject
     * @param charactersObject
     */
    static createArrayCharacterDtoFromCharacterObject = (charactersObject: CharacterObject[]): CharacterDto[] => {
        return charactersObject.map(characterObject => {
            return CharacterDto.basic(characterObject)
        })
    }
}
