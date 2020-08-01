document.getElementById("navbar").innerHTML +=
`
<div class="menu-button" onclick="myFunction()">
<i class="fas fa-bars  fa-2x icon"></i>

</div>

<a href="../index.html">
  <div class="brand-name">

    GivenSprint
  </div>
</a>


<ul>

  <span class="hide-menu-items">
    <li><a href="#news">NEWS</a></li>
  <li><a href="#contact">CONTACT</a></li>
  <li><a href="#about">ABOUT</a></li>
</span>

  <li onclick="more_cancel()"><a href="#about">MORE <i class="fas fa-caret-down fa-1x icon"></i></a></li>
</ul>

`;
