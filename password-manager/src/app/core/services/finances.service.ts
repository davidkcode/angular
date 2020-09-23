import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/home/interfaces/IEntry';
import { IFinance } from 'src/app/modules/home/interfaces/IFinance';
import { AllEntriesService } from './all-entries.service';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  private finEntries: IFinance[];

  constructor(private allEntriesService: AllEntriesService) { }

  public isFinanceEntry(entry: IEntry): entry is IFinance {
    return (entry as IFinance).depositor !== undefined &&
      (entry as IFinance).iban !== undefined &&
      (entry as IFinance).bic !== undefined;
  }

  get passwordEntries(): IFinance[] {
    this.finEntries = this.allEntriesService.allEntries.map(entry => {
      if (this.isFinanceEntry(entry)) {
        return entry;
      }
    }) as IFinance[];

    return this.finEntries;
  }
}
