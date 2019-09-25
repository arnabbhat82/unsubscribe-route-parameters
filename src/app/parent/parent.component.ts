import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  user: { id: number; name: string };

  ngOnInit() {
    this.route.params.subscribe(({ id, name }) => {
      this.user = { id, name };
    });
  }
}
