import { Link } from "react-router-dom";

import PokemonPic from "../../../assets/img/pikachu.png";
import ItemsPic from "../../../assets/img/pokeball.png";

export const Pie = () => {
  return (
    <>
      <footer className="footer fixed-bottom bg-info">
        <div className="container-fluid">
          <div className="d-flex justify-content-center text-center pt-3">
            <Link
              className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
              to="/pokemons"
            >
              <img src={PokemonPic} alt="pokeball" style={{ width: "8%" }} />
              <div>Pokemons</div>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=GBIIQ0kP15E"
              target="_blank"
              rel="noopener noreferrer"
              className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              <img src={ItemsPic} alt="pokeball" style={{ width: "8%" }} />
              <div>Items</div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
