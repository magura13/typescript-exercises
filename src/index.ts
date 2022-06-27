//! EXERCÍCIO 1 - Definir a interface "User" e usar de acordo

// interface User {
//   name : string;
//   age : number;
//   occupation: string;
// };

// export const users: User[] = [
//     {
//         name: 'Wilker',
//         age: 25,
//         occupation: 'Backend developer'
//     },
//     {
//         name: 'Bob',
//         age: 23,
//         occupation: 'Product Manager'
//     }
// ];

// export function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);

//! EXERCÍCIO 2 - Definir o tipo person

// interface User {
// name: string;
// age: number;
// occupation?: string;
// role?: string;
// }

// interface Admin {
// admin?: boolean;
// }

// export type Person = User & Admin;

// export const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];

// export function logPerson(persons: Person) {
//     console.log(` - ${persons.name}, ${persons.age}`);
// }

// persons.forEach(logPerson);

//! EXERCÍCIO 3 - Corrigir os erros de tipos na função logPerson

interface User {
name: string;
age: number;
occupation?: string;
role?: string;
}

interface Admin {
 admin?: boolean;
}

export type Person = User & Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string | undefined;
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
