import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as RootState from '../shared/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  graphData$: Observable<any>;
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Users';
  showYAxisLabel = true;
  yAxisLabel = 'Contributions';

  colorScheme = {
    domain: ['#4D124E', '#0441E3', '#51051F', '#AAAAAA']
  };

  constructor(private store: Store<RootState.State>) { }

  ngOnInit() {
    this.graphData$ = this.store.pipe(select(RootState.GetRepoContributorsValueSelector));
  }

}
