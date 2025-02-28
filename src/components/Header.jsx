import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3 fixed-top w-100">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <h1 className="h3 m-0">Contact Manager</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#Contactos">Contactos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#Favoritos">Favoritos</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;