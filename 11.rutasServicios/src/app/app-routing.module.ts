import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { NewcontactComponent } from './pages/newcontact/newcontact.component';
import { ContactdetailComponent } from './pages/contactdetail/contactdetail.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: "add-contact",
    component: NewcontactComponent
  },
  {
    path: ":id",
    component: ContactdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
