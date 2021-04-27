import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const LinkArr = links.map(link => <a  key={link} href={"#" + link}>{link}</a>
  )

  return <nav>{LinkArr}</nav>;
}

export default NavBar;
