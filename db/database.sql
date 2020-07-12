create database proyectomulti;

create table peliculas(
    id int auto_increment primary key,
    nombre varchar(100) not null,
    descripcion varchar(800) not null,
    imagen varchar(800) not null
);

create table usuarios(
    id int auto_increment primary key,
    nombre varchar(100) not null,
    password varchar(20) not null
);