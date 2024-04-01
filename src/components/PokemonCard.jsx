
function PokemonCard({pokemon}) {
    

    return(
        <div>
        <figure>
            {pokemon.imgSrc ?
            <img src={pokemon.imgSrc}/>
            :
            <p>???</p>
            }
        </figure>
        <figcaption>
            <p>{pokemon.name}</p>
        </figcaption>

        </div>
    )
}

export default PokemonCard