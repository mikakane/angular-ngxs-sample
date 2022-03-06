import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopPageComponent } from './top-page/top-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TopPageComponent,
    FormPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
