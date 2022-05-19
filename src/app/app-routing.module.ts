import {RouterModule, Routes} from "@angular/router";
import {CharactersComponent} from "./pages/characters/characters.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: AppComponent, children: [
      { path: 'characters', component: CharactersComponent }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
