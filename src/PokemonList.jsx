import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
        {loading && <div>Loading</div>}
        {!loading && (
            <div>
                <h2>List of Pokemon</h2>
                <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default PokemonList;
