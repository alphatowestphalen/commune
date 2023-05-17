import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../modules/dashboard/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public loadingservice: LoadingService) { }

  ngOnInit(): void {
  }

}
