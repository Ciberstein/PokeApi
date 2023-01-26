import React from 'react'

export const Pokemon = ({ pokemon }) => {

    return (
        <article className='pokemon__card'>
            <h2 className='pokemon__name'>{pokemon?.name}</h2>
            <div className='card__img'>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} className='pokemon__img' />
            </div>
            <ul className='pokemon__specs'>
                <li><b>Height:</b> {pokemon?.height}</li>
                <li><b>Weight: </b>{pokemon?.weight}</li>
                <li><b>Type: </b>{pokemon?.types[0].type.name}</li>
            </ul>
        </article>
    )
}
