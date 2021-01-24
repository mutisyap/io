import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_ENDPOINT } from '../../app.constants'

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private httpClient: HttpClient) {
    }

    public getBlogs(): Observable<any> {
        return this.httpClient.get<any>(API_ENDPOINT + '/api/blogs');
    }

    public getProjects(): Observable<any> {
        return this.httpClient.get<any>(API_ENDPOINT + '/api/projects');
    }

    public getSkills(): Observable<any> {
        return this.httpClient.get<any>(API_ENDPOINT + '/api/skills');
    }
}