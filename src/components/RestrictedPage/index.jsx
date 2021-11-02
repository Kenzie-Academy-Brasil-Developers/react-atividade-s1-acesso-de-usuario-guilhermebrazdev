import "./style.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Bem vindo {user}</h1>
          <button onClick={Logout} className="botao">
            Sair
          </button>
        </div>
      ) : (
        <div>
          <h2>Você não pode acessar essa página</h2>
          <button onClick={Login} className="botao">
            Entrar
          </button>
        </div>
      )}
    </div>
  );
}

export default RestrictedPage;
