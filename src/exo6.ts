interface Pet {
    name: string;
    age: number;
    speak(): string;
}

class Dog implements Pet {
    name: string;
    age: number;
    speak(): string {
        return 'woof';
    }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Cat implements Pet {
    name: string;
    age: number;
    speak(): string {
        return 'Meow';
    };
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Parrot implements Pet {
    name: string;
    age: number;
    words: string[]

    speak(): string {
        return this.words.join(' ');
    }

    constructor(name: string, age: number, words: string[]) {
        this.name = name;
        this.age = age;
        this.words = words;
    }

}

const dog: Dog = new Dog('Tobi', 6);
const cat: Cat = new Cat('Nalah', 2)
const parrot: Parrot = new Parrot('PieJackO', 2, ['Hola', 'Salut'])

console.log(dog.speak());
console.log(cat.speak());
console.log(parrot.speak());