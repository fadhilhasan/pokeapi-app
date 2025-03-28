import pokelogo from "../../../../public/pokeballlogo.png";

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

export const Cabecera = ({ query, setQuery }: HeaderProps) => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-danger"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <img src={pokelogo} alt="" style={{ width: "45px" }} />
            <p className="ps-4 pt-3 fs-5 fw-bold ">PokeApp</p>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-4  "
              type="search"
              value={query}
              placeholder="Search a pokemon"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
            {/* <button className="btn btn-outline-light " type="submit">
              Search
            </button>    */}
          </form>
        </div>
      </nav>
    </>
  );
};
