import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API= '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() { //método para retornar uma lista de curso para o componente
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //fala pro rxjs que assim que vem a primeira resposta pode se desinscrever do observable
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
