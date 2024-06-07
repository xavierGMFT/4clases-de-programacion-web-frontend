import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  formBasic: FormGroup;
  usuarios: any[] = [];

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formBasic = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      numeroTelefonico: [''] // Opcional, no requerido en el DTO
    });
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  guardar() {
    if (this.formBasic.valid) {
      const formData = this.formBasic.value;
      this.usuarioService.createUsuario(formData).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente:', response);
          this.obtenerUsuarios();
          this.formBasic.reset();
        },
        (error) => {
          console.error('Error al crear usuario:', error);
        }
      );
    } else {
      console.error('El formulario no es válido. Por favor, revisa los campos.');
    }
  }

  editar(id: number) {
    // Obtener el usuario por su ID
    this.usuarioService.getUsuarioById(id).subscribe(
      (usuario) => {
        // Rellenar el formulario con los datos del usuario
        this.formBasic.patchValue(usuario);
      },
      (error) => {
        console.error('Error al obtener usuario:', error);
      }
    );
  }

  actualizar(id: number) {
    if (this.formBasic.valid) {
      const formData = this.formBasic.value;
      this.usuarioService.updateUsuario(id, formData).subscribe(
        (response) => {
          console.log('Usuario actualizado exitosamente:', response);
          this.obtenerUsuarios();
          this.formBasic.reset();
        },
        (error) => {
          console.error('Error al actualizar usuario:', error);
        }
      );
    } else {
      console.error('El formulario no es válido. Por favor, revisa los campos.');
    }
  }

  eliminar(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(
      () => {
        console.log('Usuario eliminado exitosamente');
        this.obtenerUsuarios();
      },
      (error) => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }
}
