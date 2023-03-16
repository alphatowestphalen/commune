import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-add',
  templateUrl: './utilisateur-add.component.html',
  styleUrls: ['./utilisateur-add.component.scss']
})
export class UtilisateurAddComponent implements OnInit {

  UserFormGroup = this.formbuilder.group({
    username: [''],
    name: [''],
    password: [''],
    poste: [''],
    phone: [''],
    createdDate: new Date()
  });

 

  constructor(private formbuilder: FormBuilder , private utilisateurservice: UtilisateurService,  private router: Router) { }

  ngOnInit(): void {
  }


  

  saveUser(user:any){
    console.log(user);
    this.utilisateurservice.addUser(user)
      .subscribe(user=>{
        this.router.navigate(['/dashboard/utilisateur-list']);
      })
  }

  cancelUser(){
    this.router.navigate(['/dashboard/utilisateur-list'])
  }

}
