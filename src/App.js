import React from "react";
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/Pokemon/Pokemon";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

const all_animals = [
  {
    name: "Chicken",
    awesomelvl: 1,
  },
  {
    name: "Porcupine",
    awesomelvl: 2,
  },
  {
    name: "Killer whale",
    awesomelvl: 3,
  },
  {
    name: "Sloth",
    awesomelvl: 4,
  },
  {
    name: "Velociraptor",
    awesomelvl: 5,
  },
];
function App() {
  return (
    <main className="container my-5">
      <Title content="Gotta catch 'em all!" />
      <LikeCounter />
      <LikeButton />

      <ArticleList />
      <div>
        <AwesomeAnimals />
      </div>
      <div className="row">
        {all_pokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
