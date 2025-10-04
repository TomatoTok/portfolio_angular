import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as feather from 'feather-icons';
import { MailerService } from '../../services/mailer.service';
import { TranslationService } from '../../services/translation.service';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Subscription } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  para = 'tom.bascal@gmail.com';
  title = 'envioCorreos';
  datos: FormGroup;
  private langSubscription?: Subscription;
  
  constructor(
    private email: MailerService, 
    private fb: FormBuilder,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    this.datos = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required]),
    });

    Report.init({
      backgroundColor: 'linear-gradient(145deg, #1e2024, #23272b)',
      width: '420px',
      success: {
        svgColor: '#32c682',
        titleColor: '#fff',
        messageColor: '#fff',
        buttonBackground: '#ff014f',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(50,198,130,0.2)',
      },
      warning: {
        svgColor: '#fcaa1c',
        titleColor: '#fff',
        messageColor: '#fff',
        buttonBackground: '#ff014f',
        buttonColor: '#fff',
        backOverlayColor: 'rgba(50,198,130,0.2)',
      },
      failure: {
        svgColor: '#ff014f',
        titleColor: '#fff',
        messageColor: '#fff',
        buttonBackground: '#ff014f',
        buttonColor: '#fff',
        backOverlayColor: '#ff014f59',
      },
    });
    Loading.init({
      svgColor: '#ff014f',
    });
  }

  test() {
    Report.warning('De momento no disponible', '', 'Aceptar');
  }

  resetForm() {
    this.datos.setValue({
      nombre: 'Nombre',
      correo: 'Email',
      mensaje: 'Mensaje',
    });
  }

  noValido() {
    return this.datos.valid;
  }

  mandarCorreo() {
    Loading.pulse('Enviando..');
    const tiempoRetraso = 1000; // 1 segundos
    setTimeout(() => {
      console.log(this.noValido());
      if (!this.noValido()) {
        Report.failure(
          'Complete los campos',
          '<label> Debe completar los campos requeridos y luego presionar Enviar </label>',
          'Aceptar'
        );
        Loading.remove();
      } else {
        //Para mi
        this.email
          .envioCorreo({
            para: this.para,
            // cc: 'tomas_tok@hotmail.com',
            subject: this.datos.value.nombre + ' te ha enviado un correo',
            contenido:
              'Mensaje: ' +
              this.datos.value.mensaje +
              '. ' +
              'Su correo es: ' +
              this.datos.value.correo,
            // contenidoHTML: '<h2>Funciono</h2>',
          })
          .then((data) => {
            //Para el que envia
            this.email
              .envioCorreo({
                para: this.datos.value.correo,
                cc: this.para,
                subject:
                  this.datos.value.nombre +
                  ' gracias por comunicarte | Tomas Bascal',
                contenidoHTML:
                  '<div style="width:400px">' +
                  '<h3 style="background-color:#ed2945; color:#f0f0f0; padding:30px 15px">Enviaste un correo a Tomas Bascal</h3>' +
                  '<br> <p>Gracias por comunicarte conmigo, pronto recibiré tu correo.</p> <br><br> <p> -Saludos, <b style="color:#ed2945">Tomas Bascal</b> </p><br>' +
                  '<h3 style="background-color:#ed2945; color:#f0f0f0; padding:15px 15px;"><small style="color:#f0f0f0">Correo automático. No responda este correo.</small></h3>' +
                  '</div>',
              })
              .then((data) => {
                console.log('copy_:', data);
              })
              .catch((err) => {
                Loading.remove();
                Report.failure(
                  'No se ha podido enviar su correo',
                  '',
                  'Aceptar'
                );
                console.log(err);
              });
            this.resetForm();
            Loading.remove();
            Report.success('Correo Enviado', '', 'Aceptar');
            console.log('tmt_:', data);
          })
          .catch((err) => {
            Loading.remove();
            Report.failure('No se ha podido enviar su correo', '', 'Aceptar');
            console.log(err);
          });
      }
    }, tiempoRetraso);
  }

  ngOnInit(): void {
    // Suscribirse a cambios de idioma
    this.langSubscription = this.translationService.currentLang$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  
  ngAfterViewInit() {
    feather.replace(); //Codigo para iniciar los iconos de feather icons
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
