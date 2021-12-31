/// <reference types="@types/google.maps" />

import { CustomMap } from "./class/CustomMapClass";
import { User } from "./class/UserClass";
import { Company } from "./class/CompanyClass";

const user = new User();
const company = new Company();

// Use this to create an instance of a map and add a marker
const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);

// console.log(user);
// console.log(company);
