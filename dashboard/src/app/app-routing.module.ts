import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from '@modules/notfound/notfound.component'

const routes: Routes = [
  { path: '***', redirectTo: '404' },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'ACRA Dashboard - 404 | Page Not Found',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
