import { FormControl } from "@angular/forms";


export interface AuthForm {
    username: FormControl<string>;
    password: FormControl<string>;
}


export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Location
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

export interface Location {
    lat: string;
    lng: string;
  }
  

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company
}

  