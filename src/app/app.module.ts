import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {authReducer} from "./auth/store/auth.reducer";
import {AuthEffects} from "./auth/store/auth.effect";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
