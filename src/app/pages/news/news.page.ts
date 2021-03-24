import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import * as NewsModel from 'src/app/models/news.model';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../../core/services/loading.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;
  constructor(
    private newsService: NewsService,
    public loadingController: LoadingController,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.loadingService.presentLoading().then(() => {
      this.newsService
        .getTopHeadlinesByCategory()
        .subscribe((data: NewsModel.ResponseTopHeadlines) => {
          this.loadingService.closeLoading();
          this.news = data.articles;
        });
    });
  }
}
