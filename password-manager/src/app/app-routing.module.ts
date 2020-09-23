import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './modules/home/components/entry-list/entry-list.component';
import { FinancesListComponent } from './modules/home/components/finances-list/finances-list.component';
import { PasswordListComponent } from './modules/home/components/password-list/password-list.component';

const routes: Routes = [
  { path: "", component: EntryListComponent },
  { path: "passwords", component: PasswordListComponent },
  { path: "finances", component: FinancesListComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
