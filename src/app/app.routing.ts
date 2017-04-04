import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { DesperateComponent } from './desperate/desperate.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { VomitComponent } from './vomit/vomit.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
