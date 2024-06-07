import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent {
  form: FormGroup;
  formBasic!: FormGroup;

  constructor(private formBuilder: FormBuilder,private messageService: MessageService) {
    this.form = this.buildForm(this.formBuilder);
  }
  Form(): void {
    this.formBasic = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

 
  mostrarAlerta() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Formulario incorrecto o vacío', life: 3000 });
  }
  
  mostrarAlertaValidacion() {
    this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'El formulario fue enviado con éxito', life: 3000 });
  }
  // Custom validator function to check if password and confirm password match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }


  buildForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: ['Juan 1', [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.required, Validators.min(0)]],
      cedula: ['', [Validators.required, this.cedulaValidator()]],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, this.telefonoValidator()]]
    });
  }

  validarForm(): void {
    if (this.form.valid) {
      alert("Válido");
    } else {
      const invalidFields: string[] = Object.keys(this.form.controls).filter(controlName => this.isControlInvalid(controlName));
      if (invalidFields.length > 1) {
        const fieldsMessage = invalidFields.join(' y ');
        alert(`${fieldsMessage} están incorrectos.`);
      } else if (invalidFields.length === 1) {
        alert(`${invalidFields[0]} está incorrecto.`);
      } else {
        alert("Hay campos incorrectos.");
      }
    }
  }

  isControlInvalid(controlName: string): boolean {
    const control: AbstractControl | null = this.form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  cedulaValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      if (!/^\d{10}$/.test(value)) {
        return { 'invalidCedula': true };
      }
      return null;
    };
  }

  telefonoValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      if (!/^\d{10}$/.test(value)) {
        return { 'invalidTelefono': true };
      }
      return null;
    };
  }
}
