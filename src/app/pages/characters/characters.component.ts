import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Character} from "../../models/character.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  readonly apiUrl = environment.apiUrl;

  characters?: Observable<Character[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.characters = this.http.get<Character[]>(this.apiUrl)
  }
}


