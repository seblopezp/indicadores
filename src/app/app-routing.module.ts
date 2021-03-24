import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadChildren: () =>
      import('./pages/folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'indicator-info/:indicator-id',
    loadChildren: () =>
      import('./pages/indicator-info/indicator-info.module').then(
        (m) => m.IndicatorInfoPageModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
