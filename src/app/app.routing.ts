import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { DesperateComponent } from './desperate/desperate.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
