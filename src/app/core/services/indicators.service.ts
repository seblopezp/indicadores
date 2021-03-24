import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import * as IndicatorModel from 'src/app/models/economic-indicator.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  private readonly url = environment.url;
  constructor(private http: HttpClient) {}

  getIndicators(): Observable<IndicatorModel.Indicator> {
    return this.http.get<IndicatorModel.Indicator>(`${this.url}`);
  }

  getIndicatorInfo(
    tipo_indicador: string
  ): Observable<IndicatorModel.IndicatorInfo> {
    return this.http.get<IndicatorModel.IndicatorInfo>(
      `${this.url}/${tipo_indicador}`
    );
  }
}
