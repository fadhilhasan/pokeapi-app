import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cabecera } from "../container/Cabecera";
import { Pie } from "../container/Pie";
import { fetchPokemons } from "../../../api/fetchPokemons";
import { Pokemon } from "../../types/types";
import { Cargando } from "../container/Cargando";
import { waitFor } from "../../utils/utils";
import { Colors } from "../../utils/colors";

export const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(500);
      try {
        const allPokemons = await fetchPokemons();
        setPokemons(allPokemons);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading) {
    return <Cargando />;
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  const getCardColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "grass":
        return Colors.greenAccent;
      case "fire":
        return Colors.redAccent;
      case "water":
        return Colors.blueAccent;
      case "electric":
        return Colors.yellowAccent;
      case "rock":
        return Colors.fromARGB(255, 132, 99, 51);
      case "ground":
        return Colors.fromRGBO(221, 171, 54, 1);
      case "psychic":
        return Colors.pink;
      case "fighting":
        return Colors.orangeAccent;
      case "bug":
        return Colors.lightGreenAccent;
      case "ghost":
        return Colors.deepPurple;
      case "normal":
        return Colors.grey;
      case "poison":
        return Colors.purple;
      case "ice":
        return Colors.lightBlueAccent;
      default:
        return Colors.fromARGB(255, 86, 98, 156);
    }
  };

  return (
    <>
      <div className="page-content py-5 position-relative">
        <Cabecera query={query} setQuery={setQuery} />
        <main>
          <h1 className="px-3 py-5">Pokemons</h1>
          <div className="container">
            <div className="row">
              {filteredPokemons.map((pokemon) => (
                <div className="col-md-2 pb-5" key={pokemon.id}>
                  <div
                    className="card shadow-lg"
                    style={{
                      backgroundColor: getCardColor(pokemon.type[0]),
                    }}
                  >
                    <img
                      src={pokemon.imgSrc}
                      alt={pokemon.name}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "200px",
                        padding: "25px 30px",
                      }}
                    />
                    <div className="card-body">
                      <Link
                        to={`/pokemons/${pokemon.name.toLowerCase()}`}
                        className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                      >
                        <h4 className="card-title">{pokemon.name}</h4>
                      </Link>
                      <p className="card-text">
                        Type: {pokemon.type.join(", ")}
                      </p>
                    </div>
                    <div className="card-footer bg-white">
                      <p className="text-center text-body-dark">{pokemon.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Pie />
    </>
  );
};
