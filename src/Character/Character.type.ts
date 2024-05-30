export type Crew = {
    id: number,
    name: string,
    description: string,
    status: string,
    number: string,
    roman_name: string,
    total_prime: string,
    is_yonko: string
}

export type Fruit = {
    id: number,
    name: string,
    description: string,
    type: string,
    filename: string,
    roman_name: string,
    technicalFile: string

}

export type CharacterObject = {
    id: number,
    name: string,
    size: number,
    age: string,
    bounty: string,
    crew: Crew,
    fruit: Fruit,
    job: string,
    status: string
}

// type pour les données des Characters venant de l'api

export type CharacterApi = {
    id: number,
    name: string,
    size: number,
    age: string,
    bounty: string,
    crew: Crew,
    fruit: Fruit,
    job: string,
    status: string
}
