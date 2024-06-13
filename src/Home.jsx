import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';

const Home = () => {
  return (
    <div>
      <Header />
      <PokemonList />
      <Footer />
    </div>
  );
};

export default Home;
