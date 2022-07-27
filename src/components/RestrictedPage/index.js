import "./index.css";

function RestrictedPage({ isLoggedIn, user, login, logout }) {
  return (
    <>
      {isLoggedIn === true ? (
        <section className="Form--logado">
          <p className="logado--name">Bem-vindo, {user}!</p>
          <button className="logado--button" onClick={() => logout()}>
            Logout
          </button>
        </section>
      ) : (
        <section className="Form">
          <p className="Form--name">Você não pode acessar essa página!</p>
          <button className="Form--button" onClick={() => login()}>
            Login
          </button>
        </section>
      )}
    </>
  );
}

export default RestrictedPage;
