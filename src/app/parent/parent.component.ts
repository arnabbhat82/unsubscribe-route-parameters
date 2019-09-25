import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(({ id, name }) => {
      this.user = { id, name };
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
