import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatDialogModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule, MatSidenavModule, MatTabsModule,
  MatListModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule,
  MatProgressBarModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class MaterialModule {

}
