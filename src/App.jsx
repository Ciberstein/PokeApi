import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { NotFoundScreen } from './components/NotFoundScreen'
import { Pokemon } from './components/Pokemon'

function App() {

  const [pokemon, setPokemon] = useState()
  const [inputValue, setInputValue] = useState('pikachu')
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue === '' ? 'pikachu' : inputValue.toLowerCase() }`
    setIsLoading(true)
    axios.get(url)
    .then(res => { 
      setPokemon(res.data); 
      setHasError(false); 
    })
    .catch(err => { 
      console.log(err); 
      setHasError(true); 
    })
    .finally(() => {
      //setTimeout(() => setIsLoading(false), 30000);
      setIsLoading(false)
    })
  }, [inputValue])

  const handleSubmit = e => {
    e.preventDefault()
    e.target.namePoke.value
    setInputValue(e.target.namePoke.value)
  }

  const handleInput = e => setInputValue(e.target.value)

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="poke__form" >
        <input type="text" id="namePoke" placeholder='Ex: Pikachu' onKeyUp={handleInput} />
      </form>
      <div className='card__container'>
        {
          isLoading ? 
            <LoadingScreen />
          :
            hasError ?
              <NotFoundScreen />
            :
              <Pokemon pokemon={pokemon} />
        }
      </div>
    </div>
  )
}

export default App
