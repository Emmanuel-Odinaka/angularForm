import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CustomButtonComponent } from './component/custom-button/custom-button.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CustomButtonComponent],
  imports: [
    BrowserModule,
    FomanticUIModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
