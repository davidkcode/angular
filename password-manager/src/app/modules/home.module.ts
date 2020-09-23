import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './home/pages/main-page/main-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { EntryListComponent } from './home/components/entry-list/entry-list.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { PasswordListComponent } from './home/components/password-list/password-list.component';
import { FinancesListComponent } from './home/components/finances-list/finances-list.component';

@NgModule({
  declarations: [MainPageComponent, EntryListComponent, SidebarComponent, PasswordListComponent, FinancesListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [MainPageComponent]
})
export class HomeModule { }
