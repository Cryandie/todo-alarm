import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class LiveTasksService {
  private apiUrl: string =
    'https://todo-alarm-6ae38-default-rtdb.europe-west1.firebasedatabase.app/tasks';

  constructor(private http: HttpClient) {}

  addTask(task: Task): Observable<Task> {
    // console.log(task.id);
    return this.http.post<Task>(this.apiUrl + '.json', task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '.json').pipe(
      map((tasks) => {
        console.log(tasks);
        const tasksArray: Task[] = [];
        for (const key in tasks) {
          if (tasks.hasOwnProperty(key)) {
            tasksArray.push({ ...tasks[key], id: key });
          }
        }
        return tasksArray;
      })
    );
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url + '.json', task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url + '.json');
  }
}
