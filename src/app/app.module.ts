import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './shared/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Err404Component } from './err/404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Err404Component,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: 'courses',
        component: CourseListComponent,
        pathMatch: 'full',
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        component: Err404Component,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent, CourseListComponent],
})
export class AppModule {}
