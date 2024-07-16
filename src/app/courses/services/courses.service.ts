import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API= 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() { //método para retornar uma lista de curso para o componente
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //fala pro rxjs que assim que vem a primeira resposta pode se desinscrever do observable
      //delay(5000),
      //tap(courses => console.log(courses))
    );
  }

  loadById(id:string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    console.log(record);
    if (record._id){
      //console.log('teve um update');
      return this.update(record);
    }
    //console.log('teve um create');
    return this.create(record);
  }

  private create(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>){
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
