import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddlinkComponent } from './components/addlink/addlink.component';
import { LinkComponent } from './components/link/link.component';
import { LinklistComponent } from './components/linklist/linklist.component';
import { LinktextComponent } from './components/linktext/linktext.component';
import { PointsComponent } from './components/points/points.component';
import { VotelinkComponent } from './components/votelink/votelink.component';

import { StoreModule } from '@ngrx/store'
import { reducers } from './redux/reducer/index';
import { SortPipe } from './pipes/sort.pipe';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    AddlinkComponent,
    LinkComponent,
    LinklistComponent,
    LinktextComponent,
    PointsComponent,
    VotelinkComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
