import { Controller, Get, Post, Put, Delete, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UtilsService } from 'src/shared/service/utils/utils.service';
import { pipe } from 'rxjs';
import { AuthGuard } from 'src/shared/guards/auth/auth.guard';

@Controller('usuarios')
@UseGuards(AuthGuard)
export class UsuariosController {


    constructor(private usuarioSvc: UsuariosService,
        private utilSvc: UtilsService){ }

    @Get()
    listar(){
        return this.usuarioSvc.listar();

    }

    @Get()

    listarUsuariosById(clave: number){
        return `Usuario: ${clave}`;        
    }

    @Post ()
    async crear(@Body() usuario: CreateUsuarioDto) {

        //encrypta contraseña
        var encrypted = this.utilSvc.hashPassword(usuario.password);
        return this.usuarioSvc.crear(usuario);
    }

    @Put ()
    actualizar() {
        return this.usuarioSvc.actualizar();
    }

    @Delete (':cveUsuario')
    eliminar(@Param('cveUsuario', ParseIntPipe)cveUsuario: number) {
        return this.usuarioSvc.eliminar(cveUsuario);
    }

}
