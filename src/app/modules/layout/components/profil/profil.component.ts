import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],


})
export class ProfilComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private authservice: AuthService,private formGroup: FormGroup,
    private token: TokenService,
    private _toastService: ToastService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      newUsername: ['', Validators.required],
      newPassword: ['', Validators.required]
     
    });
  
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }


  Login($event: any) {
    $event.preventDefault();

    if (this.loginForm.invalid) {
      this._toastService.error('Remplissez tous les champs requis');
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const newUsername = this.loginForm.value.newUsername;
    const newPassword = this.loginForm.value.newPassword;

    // Effectuer les actions nécessaires pour enregistrer les modifications
    // Par exemple, envoyer les données au serveur ou les traiter localement

    console.log('Nom d\'utilisateur actuel:', username);
    console.log('Mot de passe actuel:', password);
    console.log('Nouveau nom d\'utilisateur:', newUsername);
    console.log('Nouveau mot de passe:', newPassword);

    // Réinitialiser le formulaire après l'enregistrement
    this.loginForm.reset();
  }



  
  imageSrc: string;

  loadFile(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        if (e.target) {
          this.imageSrc = e.target.result as string;
        }
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  
}
