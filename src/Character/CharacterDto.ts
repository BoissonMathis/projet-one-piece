import { CharacterObject, Crew, Fruit } from "./Character.type"

export class CharacterDto {

    public id: number
    public name: string
    public size: number
    public age: string
    public bounty: string
    public crew: Crew
    public fruit: Fruit
    public job: string
    public status: string

    constructor(character: CharacterObject){
       this.id = character.id
       this.name = character.name
       this.size = character.size
       this.age = character.age
       this.bounty = character.bounty
       this.crew = character.crew
       this.fruit = character.fruit
       this.job = character.job
       this.status = character.status
    }

    static basic = (character: CharacterObject) => {
        return new CharacterDto(character)
    }
}