import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons, startLoadingPokemons } from './store/slices/pokemon/pokemonSlice';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {


const { page, pokemons = [], isLoading } = useSelector( state => state.pokemons )
console.log(page, pokemons, isLoading)

 const dispatch = useDispatch();

useEffect(() => {
  dispatch( getPokemons() )

}, [])


  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? 'True': 'False'} </span>

      <ul>
        {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
      <button 
          disabled= { isLoading git }
          onClick={ () => dispatch( getPokemons(page) )}
      >
      Next</button>
    </>
  )
}