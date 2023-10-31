interface HeroI{
    name: string,
    age: number,
    alias: string | undefined,
    job?: string,       //la interrogación fija si una propiedad no es obligatoria
}

const superman: HeroI = {
    name: "Clark Kent",
    age: 28,
    alias: "superman",
    job: "periodista"
}

const superheores: HeroI[] = [
    {
        name: "Clark Kent",
        age: 28,
        alias: "superman",
        job: "periodista"
    },{
        name: "Peter Parker",
        age: 28,
        alias: "spiderman"
    }
]

interface ImagenI {
    src: string,
    alt: string
}

interface VideojuegoI {
    titulo: string,
    autor: string,
    imagenes: ImagenI[],
    consolas: string[]
}

const videojuegos: VideojuegoI[] = [
    {
        titulo: "crash bandicot",
        autor: "asdasd",
        imagenes: [
            {
                src: "",
                alt: "",
            }
        ],
        consolas: ["playStation1", "playStation2"],
    }
]