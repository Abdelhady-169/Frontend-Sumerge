import { Injectable  } from "@angular/core";
import { HttpClient , HttpParams } from "@angular/common/http";
import { Movie } from "./main/catalog-list/movie/movie";

@Injectable({
    providedIn: 'root'
})

export class MoviePassing {
    loadedData: Movie[] = [];
    Fetching = false;
    detailedObj!: Movie;

    constructor(private http: HttpClient) {}

    getData(url: string, apiKey: string) {
        this.Fetching = true;
        this.http.get<any>(url, {params: new HttpParams().set('api_key',API_KEY)})
        .subscribe(
            response=>{
                this.loadedData = response['response'];
            }
        );
        return this.loadedData;
    }

    getDetails() {
        return this.detailedObj;
    }

    setDetails(movie: Movie) {
        this.detailedObj = movie;
    }
}

const API_KEY = 'api_key=a3b6890bbca1fa8a02235bcd56b0711b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;