import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContentComponent} from './components/content/content.component';
import {UserService} from './services/user.service';
import {AddContentComponent} from './components/add-content/add-content.component';
import {EditContentComponent} from './components/edit-content/edit-content.component';
import {LowerCaseWithoutSpaces} from './pipes/LowerCaseWithoutSpaces';
import {CustomTooltipComponent} from './components/custom-tooltip/custom-tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    AddContentComponent,
    EditContentComponent,
    CustomTooltipComponent,
    LowerCaseWithoutSpaces
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [AddContentComponent, EditContentComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
