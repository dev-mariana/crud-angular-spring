import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly url: string = '/assets/courses.json';

  constructor(private http: HttpClient) { }

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
    .pipe(
        first(),
        delay(5000),
        tap(courses => console.log(courses))
      );
  }
}
