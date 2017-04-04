import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'level-one/:name',
    component: LevelOneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
