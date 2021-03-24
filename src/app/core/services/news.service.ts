import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTopHeadlines } from 'src/app/models/news.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiKey = environment.news_key;
const headers = new HttpHeaders({
  'X-Api-key': apiKey,
});
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly url = environment.news_url;

  constructor(private http: HttpClient) {}

  getTopHeadlinesByCategory(): Observable<ResponseTopHeadlines> {
    return this.http.get<ResponseTopHeadlines>(
      `${this.url}/top-headlines?country=us&category=business`,
      { headers }
    );
  }
}
