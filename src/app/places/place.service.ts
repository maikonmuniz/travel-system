import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient) { }

  save (place: Place): Observable<Place> {
    return this.httpClient.post<Place>("http://localhost:3000/places", place);
  }

  getAll(): Observable<Place[]> {
    return this.httpClient.get<Place[]>("http://localhost:3000/places")
  }
}
