export const SelectCard = ({
  pokemon,
  handlePokemonClick,
  playerPokemon,
  enemyPokemon,
  setPlayerPokemon,
  setEnemyPokemon,
}) => {
  const handlePlayerPokemonClick = () => {
    setPlayerPokemon();
  };

  const handleEnemyClick = () => {
    setEnemyPokemon();
  };
  // both click not working atm
  const handleBothClick = () => {
    console.log("both clicked");
  };
  if (pokemon !== playerPokemon && pokemon !== enemyPokemon) {
    return (
      <div
        className="pokemon-card-container"
        onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
  if (pokemon === playerPokemon && pokemon !== enemyPokemon) {
    return (
      <div
        className="player-pokemon-card-container"
        onClick={() => handlePlayerPokemonClick()}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
  if (pokemon === enemyPokemon && pokemon !== playerPokemon) {
    return (
      <div
        className="enemy-pokemon-card-container"
        onClick={() => handleEnemyClick()}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }

  if (pokemon === enemyPokemon && pokemon === playerPokemon) {
    return (
      <div
        className="both-pokemon-card-container"
        onClick={() => handleBothClick()}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
};
