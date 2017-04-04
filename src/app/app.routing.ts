import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { DesperateComponent } from './desperate/desperate.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { VomitComponent } from './vomit/vomit.component';
import { JeansComponent } from './jeans/jeans.component';
import { SuitComponent } from './suit/suit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'level-one/:id',
    component: LevelOneComponent
  },
  {
    path: 'desperate/:id',
    component: DesperateComponent
  },
  {
    path: 'awesome/:id',
    component: AwesomeComponent
  },
  {
    path: 'vomit/:id',
    component: VomitComponent
  },
  {
    path: 'jeans/:id',
    component: JeansComponent
  },
  {
    path: 'suit/:id',
    component: SuitComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
