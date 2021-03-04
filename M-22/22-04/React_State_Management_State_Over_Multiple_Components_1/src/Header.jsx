import React from "react";

function Header(props) {
  const { loggedIn, handleLoggedInClick, increaseFontSizeClick } = props;

  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={() => increaseFontSizeClick()}>
        Increase Font
      </button>
    </div>
  );
}

export default Header;
