import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicatorsService } from '../../core/services/indicators.service';
import * as IndicatorModel from 'src/app/models/economic-indicator.model';
import {} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LoadingService } from 'src/app/core/services/loading.service';
@Component({
  selector: 'app-indicator-info',
  templateUrl: './indicator-info.page.html',
  styleUrls: ['./indicator-info.page.scss'],
})
export class IndicatorInfoPage implements OnInit, AfterViewInit {
  indicatorId: any;
  indicatorInfo: IndicatorModel.IndicatorInfo = new IndicatorModel.IndicatorInfo();
  actualValue: number;
  months: any;
  pipe = new DatePipe('en-US');
  lineChart: any;

  chartData: ChartDataSets[] = [{ data: [], label: 'Valores indicador' }];
  chartLabels: Label[] = [];

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'blaaaa',
    },
    pan: {
      enabled: true,
      mode: 'xy',
    },
    zoom: {
      enabled: false,
    },
  };

  chartColors: Color[] = [
    {
      borderColor: '#ffff',
      backgroundColor: '#0CB7F2',
    },
  ];

  lineChartType = 'line' as const;
  showLegend = false;

  constructor(
    private route: ActivatedRoute,
    private indicatorService: IndicatorsService,
    private loadingService: LoadingService
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.indicatorId = this.route.snapshot.paramMap.get('indicator-id');
    this.getIndicatorInfo();
  }

  getIndicatorInfo() {
    this.loadingService.presentLoading().then(() => {
      this.indicatorService
        .getIndicatorInfo(this.indicatorId)
        .subscribe((data: IndicatorModel.IndicatorInfo) => {
          if (data) {
            this.loadingService.closeLoading();
            this.indicatorInfo = data;
            this.actualValue = data.serie[0].valor;
            this.chartData[0].data = [];
            this.chartLabels = [];
            const chartData = this.indicatorInfo.serie.slice(0, 10);
            chartData.reverse();
            for (let item of chartData) {
              let shortDate = this.pipe.transform(item.fecha, 'dd/MM/yyyy');
              this.chartLabels.push(shortDate);
              this.chartData[0].data.push(item['valor']);
            }
          }
        });
    });
  }
}
