import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainManagerComponent} from './main-manager/main-manager.component';
import {AccessGuard} from './access.guard';
import {MainComponent} from './main/main.component';

const routes: Routes = [{path: '', component: MainManagerComponent, canActivate: [AccessGuard]}, {path: 'home', component: MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
