import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavigationBarComponent } from './shared/top-navigation-bar/top-navigation-bar.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UsersService } from './components/user-list/userService';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FooterBarComponent,
    HowItWorksComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    ConfirmDialogModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
