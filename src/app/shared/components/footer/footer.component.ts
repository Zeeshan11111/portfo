import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }
  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedlang = selectElement.value;
    if (selectedlang) {
      this.translate.use(selectedlang)
    }
  }
}
