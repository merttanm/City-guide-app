import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable()
export class serviceService {
    private url = 'https://api.chucknorris.io/jokes'

    constructor(private http: HttpClient) { }

    getData(): Observable<[]> {
        return this.http.get<[]>(`${this.url}/categories`)
    }

    getCategory(category) {
        return this.http.get(`${this.url}/random?category=${category}`)
    }

    getRandom() {
        return this.http.get(`${this.url}/random`)
    }

}