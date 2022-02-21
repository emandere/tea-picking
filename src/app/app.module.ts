import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { MatListModule} from "@angular/material/list";
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaPickingComponent } from './tea-picking/tea-picking.component';
import { RouterModule } from '@angular/router';
import { TeaAnalysisComponent } from './tea-analysis/tea-analysis.component';
import { MatFormField, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TeaPickingComponent,
    TeaAnalysisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '',component: TeaPickingComponent,pathMatch: 'full'},
      { path: 'analysis', component: TeaAnalysisComponent,pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
