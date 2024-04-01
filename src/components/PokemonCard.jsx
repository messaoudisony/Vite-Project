import PropTypes from "prop-types"
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

PokemonCard.prototype ={
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired
    })
}

export default PokemonCard