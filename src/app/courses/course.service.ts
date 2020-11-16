import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  retrieveAll(): Course[] {
    return COURSES;
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    releaseDate: 'November 2, 2019',
    description:
      'Neste Curso, os alunos irão obter um grande conhecimento no principais cursos CLI',
    imageUrl: '/assets/img/cli.png',
    price: 12.99,
    code: 'XLF-1212',
    duration: 120,
    rating: 3,
  },
  {
    id: 2,
    name: 'Angular: Forms',
    releaseDate: 'November 4, 2019',
    description:
      'Neste Curso, os alunos irão obter um grande conhecimento no principais cursos CLI',
    imageUrl: '/assets/img/forms.png',
    price: 24.99,
    code: 'DWQ-3412',
    duration: 120,
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    releaseDate: 'November 8, 2019',
    description:
      'Neste Curso, os alunos irão obter um grande conhecimento no principais cursos CLI',
    imageUrl: '/assets/img/http.png',
    price: 36.99,
    code: 'QPL-0913',
    duration: 120,
    rating: 4,
  },
  {
    id: 4,
    name: 'Angular: Router',
    releaseDate: 'November 16, 2019',
    description:
      'Neste Curso, os alunos irão obter um grande conhecimento no principais cursos CLI',
    imageUrl: '/assets/img/router.png',
    price: 46.99,
    code: 'OHP-1095',
    duration: 120,
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Angular: Animations',
    releaseDate: 'November 25, 2019',
    description:
      'Neste Curso, os alunos irão obter um grande conhecimento no principais cursos CLI',
    imageUrl: '/assets/img/animations.png',
    price: 58.99,
    code: 'PWY-9381',
    duration: 120,
    rating: 5,
  },
];
