import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto5TableComponent } from './components/punto5-table/punto5-table.component';
import { Punto5FormComponent } from './components/punto5-form/punto5-form.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto2TablaComponent } from './components/punto2-tabla/punto2-tabla.component';

const routes: Routes = [
  { path: "punto1", component: Punto1Component},
  { path: "punto2", component: Punto2Component},
  { path: "punto5-table", component: Punto5TableComponent},
  { path: "punto5-form/:id", component: Punto5FormComponent},
  { path: "punto1-form", component: Punto1FormComponent},
  { path: "punto2-table", component: Punto2TablaComponent},
  { path: "**", component: Punto1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
