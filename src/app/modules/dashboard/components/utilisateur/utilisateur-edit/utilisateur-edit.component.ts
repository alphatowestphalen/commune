import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { User } from './user.interface';

@Component({
  selector: 'app-utilisateur-edit',
  templateUrl: './utilisateur-edit.component.html',
  styleUrls: ['./utilisateur-edit.component.scss']
})
export class UtilisateurEditComponent implements OnInit {
  id: any;
 user : User

  constructor(private formbuilder: FormBuilder , private utilisateurservice: UtilisateurService,  private router: Router,private activatedroute: ActivatedRoute) { }
  UserFormGroup = this.formbuilder.group({
    username: [''],
    name: [''],
    password: [''],
    poste: [''],
    phone: [''],
    createdDate: new Date()
  });

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUtilisateurbyID();
      
    });
  }
  setForm() {
    if (this.user != null) {
      this.UserFormGroup = this.formbuilder.group({
        username: this.user.username,
        name: this.user.name,
        password: this.user.password,
        poste: this.user.poste,
        phone: this.user.phone,
        createdDate: new Date()
      });
    }
    
  }
  updateUtilisateurbyID() {
    console.log(this.UserFormGroup.value);
    this.utilisateurservice.updateUser(this.UserFormGroup.value, this.id).subscribe(data => {
      this.router.navigate(['/dashboard/utilisateur-list']);
    });
  }

  getUtilisateurbyID() {
    this.utilisateurservice.getUserByID( this.id)
      .subscribe(data => {
        this.user = data
        this.setForm()
      })
  }

  saveUser(user: any) {
    console.log(user);
    this.utilisateurservice.addUser(user).subscribe(user => {
      this.router.navigate(['/dashboard/utilisateur-list']);
    });
  }

  cancelUser(){
    this.router.navigate(['/dashboard/utilisateur-list'])
  }
}
