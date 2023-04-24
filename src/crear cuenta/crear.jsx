const Crearcuenta = () => {
  return(
<body><header class="u-clearfix u-header u-header" id="sec-e602"><div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <a class="u-image u-logo u-image-1">
      </a>
      <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div class="menu-collapse" >
          <a class="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
          </a>
        </div>
        <div class="u-nav-container">
          <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" >Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" >About</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"  >Contact</a>
</li></ul>
        </div>
      </nav>
    </div></header> 
  <section class="u-align-center u-clearfix u-section-1" >
    <div class="u-clearfix u-sheet u-sheet-1">
      <h2 class="u-text u-text-default u-text-1">Crear cuenta</h2>
      <div class="u-form u-form-1">
        <form class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"  source="email" name="form">
          <div class="u-form-group u-form-name u-label-none">
            <label for="name-3b9a" class="u-label">Name</label>
            <input type="text" placeholder="Ingresar su nombre"  name="name" class="u-input u-input-rectangle" required=""/>
          </div>
          <div class="u-form-email u-form-group u-label-none">
            <label for="email-3b9a" class="u-label">Email</label>
            <input type="email" placeholder="ingresar su correo electronico"  name="email" class="u-input u-input-rectangle" required=""/>
          </div>
          <div class="u-form-group u-form-message u-label-none">
            <label for="message-3b9a" class="u-label">Message</label>
            <textarea placeholder="ingresar su institucion educativa superior" rows="4" cols="50" id="message-3b9a" name="message" class="u-input u-input-rectangle" required=""></textarea>
          </div>
          <div class="u-form-group u-label-none u-form-group-4">
            <label for="text-ca06" class="u-label">Input</label>
            <input type="text" placeholder="ingresar su clave" id="text-ca06" name="text" class="u-input u-input-rectangle"/>
          </div>
          <div class="u-align-left u-form-group u-form-submit">
            <a href="#" class="u-btn u-btn-submit u-button-style">Submit</a>
            <input type="submit" value="submit" class="u-form-control-hidden"/>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  
  <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" ><div class="u-clearfix u-sheet u-sheet-1"></div></footer>
  <section class="u-backlink u-clearfix u-grey-80">
    <a class="u-link" target="_blank">
      <span>Website Templates</span>
    </a>
    <p class="u-text">
      <span>created with</span>
    </p>
    <a class="u-link" href="" target="_blank">
      <span>Website Builder Software</span>
    </a>. 
  </section>

</body>)};
export default Crearcuenta;