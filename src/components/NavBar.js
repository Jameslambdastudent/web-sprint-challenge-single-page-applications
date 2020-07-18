import React from "react"


function NavBar() {
    return(
        <nav className="blue">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">PizzaBite</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Order</a></li>
        
      </ul>
    </div>
  </nav>
    )
}

export default NavBar