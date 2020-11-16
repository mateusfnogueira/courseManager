import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  declarations: [AppComponent, CourseListComponent, StarComponent, ReplacePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, CourseListComponent],
})
export class AppModule {}
