import { CharacterDto } from "./CharacterDto";

export class Character {
    public characters: CharacterDto[]

    constructor(characters: CharacterDto[]){
        this.characters = characters
    }
}