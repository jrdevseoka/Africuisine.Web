import { SharedModule } from './shared/shared.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NotFoundComponent } from '@modules/notfound/notfound.component'

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
