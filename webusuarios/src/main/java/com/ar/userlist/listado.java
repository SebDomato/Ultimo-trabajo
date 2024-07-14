package com.ar.userlist;

public class listado
{
     // Atributos de la clase Pelicula que representan las columnas de la tabla
     private int id_user;  // ID autoincremental de la película (int) idPelicula;
     private String nombre; // Título de la película (varchar)
     private String edad;   // Género de la película (varchar)
     private String username; // Duración de la película (varchar)
     private String imagen;   // URL de la imagen de la película (varchar)

     // Constructor vacío necesario para deserialización de JSON
    public listado() {}

     // Constructor con parámetros para inicializar todos los atributos
    public listado(int id_user,String nombre, String edad, String username, String imagen) {
    this.id_user = id_user;
    this.nombre = nombre;
    this.edad = edad;
    this.username = username;
    this.imagen = imagen;
    }

     // Método getter para obtener el ID de la película
    public int getIdUser() {
        return id_user;
    }

     // Método setter para establecer el ID de la película
    public void setIdUser(int id_user) {
        this.id_user = id_user;
    }

     // Método getter para obtener el título de la película
    public String getNombre() {
        return nombre;
    }

     // Método setter para establecer el título de la película
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

     // Método getter para obtener el género de la película
    public String getEdad() {
        return edad;
    }

     // Método setter para establecer el género de la película
    public void setEdad(String edad) {
        this.edad = edad;
    }

     // Método getter para obtener la duración de la película
    public String getUsername() {
        return username;
    }

     // Método setter para establecer la duración de la película
    public void setUsername(String username) {
        this.username = username;
    }

     // Método getter para obtener la imagen de la película
    public String getImagen() {
        return imagen;
    }

     // Método setter para establecer la imagen de la película
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}
