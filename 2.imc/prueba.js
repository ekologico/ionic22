var mueble = {
    nombre: 'silla',
    getNombreFlecha: () => console.log(this.nombre),
    getNombreNormal: function() {
      console.log(this.nombre);
    }
  }
  
  mueble.getNombreFlecha();
  // undefined
  
  mueble.getNombreNormal();
  // silla
  
  var nombreMueble = mueble.getNombreNormal();
  console.log("nombreMueble: " + nombreMueble);
  // nombreMueble: undefined