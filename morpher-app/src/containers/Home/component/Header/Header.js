import './Header.css';

function Header() {
  return (
    <header class="page__header">
    <navbar class="px-1 px-md-5">
      <div class="brand">
        <h1 class="page__title">Face Morpher<small>Morph 2 Faces</small></h1>
      </div>
      <button class="navbar__drawer-toggle">
        <div class="menu-icon-lines"><span></span><span></span><span></span></div>
      </button>
    </navbar>
  </header>
  );
}

export default Header;
