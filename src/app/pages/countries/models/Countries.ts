export interface CountriesInterface {
    _id: string;
    id: number;
    name: string;
    temperature: string;
    capitals: string;
    population: string;
    image: string;
    beach?: [{
        name: string;
    }]
}