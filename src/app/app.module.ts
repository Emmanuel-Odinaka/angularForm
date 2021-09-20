import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import { RouteComponent } from './component/route/route.component';

@NgModule({
  declarations: [AppComponent, FormComponent, RouteComponent],
  imports: [
    BrowserModule,
    FomanticUIModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    RouterModule.forRoot([
      { path: '', component: FormComponent },
      { path: 'route', component: RouteComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
