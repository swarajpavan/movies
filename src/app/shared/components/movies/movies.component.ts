import { Component, OnInit } from "@angular/core";
import  movieArray  from "../../const/movies";
import { Imovies } from "../../model/movies";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})



export class Moviescomponent implements OnInit{
    moviesData : Array<Imovies> = movieArray
    constructor() { }

    ngOnInit(): void {
        
    }

}