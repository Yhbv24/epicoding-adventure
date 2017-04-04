import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { DesperateComponent } from './desperate/desperate.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { VomitComponent } from './vomit/vomit.component';
import { JeansComponent } from './jeans/jeans.component';
import { SuitComponent } from './suit/suit.component';
import { GetFiredComponent } from './get-fired/get-fired.component';
import { CallInSickComponent } from './call-in-sick/call-in-sick.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';
import { GetJobComponent } from './get-job/get-job.component';

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
    path: 'get-job/:id',
    component: GetJobComponent
  },
  {
    path: 'suit/:id',
    component: SuitComponent
  },
  {
    path: 'get-fired/:id',
    component: GetFiredComponent
  },
  {
    path: 'call-in-sick/:id',
    component: CallInSickComponent
  },
  {
    path: 'win/:id',
    component: WinComponent
  },
  {
    path: 'lose/:id',
    component: LoseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
