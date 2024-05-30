import { CharacterDto } from "../Character/CharacterDto.ts";

export class DisplayInterface {

    static createCharacterElements(characters: CharacterDto[]) {
        console.log(characters)
    }
}