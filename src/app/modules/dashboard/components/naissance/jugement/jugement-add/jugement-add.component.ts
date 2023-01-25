import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugement-add',
  templateUrl: './jugement-add.component.html',
  styleUrls: ['./jugement-add.component.scss']
})
export class JugementAddComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,) { }

  PiecesFormGroup = this._formBuilder.group({});
  EnfantFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  PereFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  MereFormGroup = this._formBuilder.group({
    threeCtrl: ['', Validators.required],
  });
  DeclarantFormGroup = this._formBuilder.group({
    fourCtrl: ['', Validators.required],
  });
  MaireFormGroup = this._formBuilder.group({
    fiveCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }

}
