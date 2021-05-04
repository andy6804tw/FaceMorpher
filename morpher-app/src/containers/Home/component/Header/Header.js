import './Header.css';

function Header() {
  return (
    <header className="page__header">
    <nav className="px-1 px-md-5">
      <div className="brand">
        <h1 className="page__title">Face Morpher<small>Morph 2 Faces</small></h1>
      </div>
      <button className="navbar__drawer-toggle">
        <div className="menu-icon-lines"><span></span><span></span><span></span></div>
      </button>
    </nav>
  </header>
  );
}

export default Header;
