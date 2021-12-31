/// <reference types="@types/google.maps" />

import { CustomMap } from "./class/CustomMapClass";
import { User } from "./class/UserClass";
import { Company } from "./class/CompanyClass";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);

// console.log(user);
// console.log(company);
