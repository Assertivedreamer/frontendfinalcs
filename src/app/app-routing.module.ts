import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';

const routes: Routes = [
  { path: 'unversitystats.com/universities/top/10', component: Chart1Component },
  { path: 'unversitystats.com/universities/top/2', component: Chart2Component },
  { path:'unversitystats.com/universities/continents', component:Chart3Component },
  { path:'universitiesinIndia', component:Table1Component },
  { path:'universitiesinEurope', component:Table2Component },
  { path:'universitiesinAllcountries', component:Table3Component },
  { path: '**', component: Chart1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
