import { Body, Controller, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilsService } from 'src/shared/service/utils/utils.service';
import { AuthDto } from 'src/shared/dto/auth.dto';
import { throwDeprecation } from 'process';

@Controller('auth')
export class AuthController {

    constructor(private authSvc: AuthService,
        private utilsSvc: UtilsService){}

    @post()
    @HttpCode(HttpStatus.OK){
    async iniciarSesion(@Body () data: AuthDto) {

        const { username, passwd } = data;

        const usuario = await this.authSvc.obtenerUsuario(username);

        if(!usuario){
            throw new UnauthorizedException('El usuario y/o contraseña es incorrecto');
        }

        if (await this.utilsSvc.checkPassword(password, usuario.password)){

            const { password, fechaRegistro, ...payload } = usuario;
            const jwt = await this.utilsSvc.generateJWT(payload);

        } else {
            throw new UnauthorizedException('El usuario y/o contraseña es incorrecto')
        }


    }

    }
    
}
