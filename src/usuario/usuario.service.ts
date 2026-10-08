import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Temporal, Usuarios } from './temporal';

@Injectable()
export class UsuarioService {

  create(createUsuarioDto: CreateUsuarioDto){
    return Usuarios.push(createUsuarioDto);
  }

  findAll() {
    return Usuarios;
  }

  findOne(id: number){
    return Usuarios.find((u) => u.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = Usuarios.find((u) => u.id === id);
    if (!usuario) return `No existe el usuario #${id}`;
    Object.assign(usuario, updateUsuarioDto);
    return usuario;
  }

  remove(id: number){
    const indice = Usuarios.findIndex((u) => u.id === id);
    if (indice === -1) return `No existe el usuario #${id}`;
    Usuarios.splice(indice, 1);
    return `Usuario #${id} eliminado`;
  }

}
