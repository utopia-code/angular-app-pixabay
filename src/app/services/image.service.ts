import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  

  private error$ = new Subject<string>();
  private keyword$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  setError(message: string) {
    this.error$.next(message);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  sendKeyword(word: string) {
    this.keyword$.next(word);
  }

  getKeyword(): Observable<string> {
    return this.keyword$.asObservable();
  }

  getImages(word: string, imgsPPage: number, currentPage: number): Observable<any> {
    const KEY = '23599734-9c474473098590e151c2ebe92';
    const URL = 'https://pixabay.com/api/?key=' + KEY + '&q=' + word +
                '&per_page=' + imgsPPage + '&page=' + currentPage;
    return this.http.get(URL);
  }
}
