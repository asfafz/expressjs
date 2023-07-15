import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
 <div>

<nav className="navbar navbar-expand-sm navbar-white bg-white shadow p-3 mb-5 bg-body">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)"><img src="assets/images/logo.jpg" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link"> Home </Link>
        </li>
        <li className="nav-item">
          <Link to={'/Emails'} className="nav-link"> Emails </Link>
        </li>
        <li className="nav-item">
          <Link to={'/'} className="nav-link"> Inout  </Link>
        </li>
        <li className="nav-item">
          <Link to={'/charts'} className="nav-link"> Charts  </Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to={'/Signin'} className="nav-link"> Logout </Link>
      </form>
    </div>
  </div>
</nav>
</div>


    </>









  );
}

export default Header;
