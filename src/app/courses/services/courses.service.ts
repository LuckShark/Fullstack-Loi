import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] { //método para retornar uma lista de curso para o componente
    return [
      { _id:'1', name:'Angular', category:'front-end' }
    ];
  }

}
