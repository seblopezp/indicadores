import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    return loading.present();
  }

  async closeLoading() {
    this.loadingController.dismiss();
  }
}
