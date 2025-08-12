import {IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {

    @IsEmail ()
    @IsNotEmpty ()
    @IsString ()
    @MaxLength ()
    nombre: string;
    
    @IsEmail ()
    @IsNotEmpty ()
    @IsString ()
    @MaxLength ()
    apellidos: string;

    @IsEmail ()
    @IsNotEmpty ()
    @IsString ()
    @MaxLength ()
    correo: string;

    @IsEmail ()
    @IsNotEmpty ()
    @IsString ()
    @MaxLength ()
    usuario: string;

    @IsEmail ()
    @IsNotEmpty ()
    @IsString ()
    @MaxLength ()
    password: string;





    

}