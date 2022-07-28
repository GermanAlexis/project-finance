import { Routes } from '@angular/router';
import { DetailsComponent } from '../finance/details/details.component';
import { FinanceComponent } from '../finance/finance.component';
import { StatisticComponent } from '../finance/statistic/statistic.component';

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticComponent   },
  { path: 'finance', component: FinanceComponent  },
  { path: 'finance-details', component: DetailsComponent  },
];

