export const Cargando = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <span className="spinner-border" aria-hidden="true"></span>
          <span className="spinner-border" aria-hidden="true"></span>
          <span className="spinner-border" aria-hidden="true"></span>
          <br />
          <span role="status">Loading...</span>
        </div>
      </div>
    </>
  );
};
