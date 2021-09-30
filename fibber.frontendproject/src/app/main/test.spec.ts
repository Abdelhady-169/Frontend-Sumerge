import { fakeAsync, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MainComponent } from "./main.component";
import { Testing } from "../shared/services/testing";
import { MovieComponent } from "./catalog-list/movie/movie.component";


describe('Component: Main', () => {
    let fixture;
    let moviecomponent;
    let app: MainComponent;
    
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MainComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        
        }).compileComponents();
    })

    beforeEach( () =>{
        fixture = TestBed.createComponent(MainComponent);
        moviecomponent = TestBed.inject(MovieComponent);
        spyOn(moviecomponent,'fetchData').and.returnValue(of({'results': [Testing.getDummy()]}));
        app = fixture.componentInstance;
        fixture.detectChanges(); 
    })

    it('should create home app',() =>{
        expect(app).toBeTruthy();
    })

    it('should load sah',fakeAsync(() => {
        expect(app.movies).toEqual([Testing.getDummy()]);
    }))

});