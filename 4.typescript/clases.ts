interface HeroI{
    name: string,
    age: number,
    alias: string | undefined,
    job?: string,       //la interrogación fija si una propiedad no es obligatoria
}

//Implements: Si una clase implementa una interfacce, vamos a tener que tener sus propiedades dentro la clase
class Heroe implements HeroI{
    name: string;
    age: number;
    alias: string | undefined;
    job?: string;

    email: string | undefined;

    constructor(name: string, age: number, alias: string, job?: string, email?: string){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.job = job;
        this.email = email;
    }

    getAlias(): string | undefined{ 
        return this.alias;
    }

    getAge(): number | string{
        if(this.age > 18 ) return this.age;
        return "pepe";
    }

}

const superman2 = new Heroe("clark kent", 28, "superman", undefined, "superman@gmail.com")


interface PersonaI {
    name: string,
    age: number
}

class Persona implements PersonaI {
    name: string;
    age: number;
    private direccion: string;
    constructor(name: string, age: number){
        this.age = age;
        this.name = name;
    }

    getName(): string { return this.name }
    
    getDireccion(): string{
        return this.direccion;
    }
}

class Alumn extends Persona{
    protected email: string;
    constructor(name: string, age: number, email: string) {
        super(name, age);
        this.email = email;
    }

    getEmail(): string { return this.email; }
    
}

const alumnito = new Alumn("Pepe", 25, "pepito@gmail.com");
console.log(alumnito)
alumnito.getName()



alumnito.getEmail()

//public --> el dato es accesible en cualquier punto
//protected -- > es accesible dentro la clase o clases que la extienden
//private --> no es accesible fuera de la clase