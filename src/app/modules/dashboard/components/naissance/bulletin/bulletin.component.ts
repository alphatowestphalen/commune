import { FormService } from '../../../services/form.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SurveyCreatorModel } from 'survey-creator-core';
import { Model } from 'survey-core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { BulletinNaissanceService } from '../../../services/bulletin-naissance.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss'],
})
export class BulletinComponent implements OnInit {
  defaultJson: any;
  formName: string = 'BulletinNaissance';
  bulletin: any;
  surveyModel: any;
  surveyCreatorModel: any;
  size: any = '';

  page = 0;

  search: any;

  tableColumns: Array<Column> = [
    {
      columnDef: 'idbulletin',
      header: 'N° bulletin Copie',
      cell: (element: Record<string, any>) => `${element['idbulletin']}`,
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) =>
        `${element['premierecopie']['enfant']['nomEnfant']} ${element['premierecopie']['enfant']['prenomsEnfant']}`,
    },
    {
      columnDef: 'datebulletin',
      header: "Date d'bulletin ",
      cell: (element: Record<string, any>) => `${element['datebulletin']}`,
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date 1ère Copie',
      cell: (element: Record<string, any>) =>
        `${element['premierecopie']['datePremierCopie']}`,
    },
  ];

  tableData: any = [];
  creatorOptions: any = {
    showLogicTab: true,
    isAutoSave: true,
  };

  constructor(
    public dialog: MatDialog,
    private bulletinService: BulletinNaissanceService,
    private formService: FormService,
    private router: Router
  ) {}

  @ViewChild('htmlData') htmlData!: ElementRef;

  ngOnInit(): void {
    const $ = this;
    this.formService.getFormByTitle(this.formName).subscribe((data: any) => {
      this.defaultJson = data.form.content;
      const survey = new Model(this.defaultJson);
      survey.onComplete.add(function (sender, options) {
        options.showDataSaving();
        $.bulletinService.saveBulletin(sender, options).subscribe(
          (data) => {
            options.showDataSavingSuccess();
          },
          (error) => {
            options.showDataSavingError();
          }
        );
      });
      this.surveyModel = survey;
    });
    // const creator = new SurveyCreatorModel(this.creatorOptions);
    // creator.text = JSON.stringify(this.defaultJson);
    // this.surveyCreatorModel = creator;
  }
}
