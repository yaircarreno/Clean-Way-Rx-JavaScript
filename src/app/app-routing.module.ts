import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginatorComponent } from './paginator/paginator.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TakeSubscriptionsComponent } from './take-subscriptions/take-subscriptions.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'take-subscriptions', component: TakeSubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
