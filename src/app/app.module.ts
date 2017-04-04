import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { DesperateComponent } from './desperate/desperate.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { VomitComponent } from './vomit/vomit.component';
import { JeansComponent } from './jeans/jeans.component';
import { SuitComponent } from './suit/suit.component';
import { GetJobComponent } from './get-job/get-job.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LevelOneComponent,
    DesperateComponent,
    AwesomeComponent,
    VomitComponent,
    JeansComponent,
    SuitComponent,
    GetJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
