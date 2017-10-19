import { Component, OnInit, OnDestroy } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit, OnDestroy {
  problems: Problem[];
  private subscription: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getProblems(): void {
    this.subscription = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }
}
