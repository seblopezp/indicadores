import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../core/services/indicators.service';
import * as IndicatorModel from 'src/app/models/economic-indicator.model';
import { LoadingService } from '../../core/services/loading.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  indicator: IndicatorModel.Indicator;
  loading: boolean;

  constructor(
    private indicatorsService: IndicatorsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getIndicators();
  }

  getIndicators() {
    this.loadingService.presentLoading().then(() => {
      this.indicatorsService.getIndicators().subscribe(
        (data: IndicatorModel.Indicator) => {
          if (data) {
            this.indicator = data;
            this.loadingService.closeLoading();
          }
        },
        (error) => console.error(error)
      );
    });
  }
}
