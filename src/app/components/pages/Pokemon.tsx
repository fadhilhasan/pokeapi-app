import { Link, useParams } from "react-router-dom";
import { Pie } from "../container/Pie";

import PokemonPic from "../../../assets/img/pokeball.png";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../../types/types";
import { fetchPokemon } from "../../../api/fetchPokemon";
import { waitFor } from "../../utils/utils";
import { Cargando } from "../container/Cargando";

export const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const { name } = useParams();

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemon(name as string);
      setIsLoading(true);
      await waitFor(500);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <Cargando />;
  }

  return (
    <>
      <Link to="/pokemons">
        <button className="btn btn-primary w-25 d-flex justify-content-center">
          <img
            className="pe-2"
            src={PokemonPic}
            alt="PokePic"
            style={{ width: "10%" }}
          />{" "}
          Go Back
        </button>
      </Link>
      <div>
        <main>
          <div className="d-flex justify-content-center fs-3 ">
            {pokemon?.name?.toUpperCase()}
          </div>

          <hr />
          <div className="d-flex justify-content-center">
            Who is that Pokemon?. {pokemon?.id}
          </div>
          <div className="d-flex justify-content-center align-items-center py-2">
            <div
              className="card text-center shadow-lg"
              style={{ width: "18rem" }}
            >
              <img
                src={pokemon?.imgSrc}
                alt={pokemon?.name}
                className="card-img-top"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon?.name.toUpperCase()}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">HP: {pokemon?.hp}</li>
                  <li className="list-group-item">Attack: {pokemon?.attack}</li>
                  <li className="list-group-item">
                    Defense: {pokemon?.defense}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Pie />
    </>
  );
};
