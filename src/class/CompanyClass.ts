import faker from "faker";
import { Mappable } from "./CustomMapClass";

export class Company implements Mappable {
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
        <div>
            <h1>Comapany name is ${this.name}</h1>
            <h3>Company Catch Phrase is ${this.catchPhrase}</h3>
        </div>
    `;
  }
}
