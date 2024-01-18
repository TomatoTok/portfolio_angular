import { Component } from '@angular/core';
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0, // La posición a la que deseas desplazarte (en este caso, la parte superior de la página)
      behavior: "smooth" // Hace que el desplazamiento sea suave
    });
  }
}
