import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQlModule } from './modules/graph-ql/graph-ql.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { ContentModule } from './modules/content/content.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ApolloClientProvider } from './modules/graph-ql/providers/apollo-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQlModule,
    AccountsModule,
    ContentModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    ApolloClientProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
