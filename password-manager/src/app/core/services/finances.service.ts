import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/home/interfaces/IEntry';
import { IFinance } from 'src/app/modules/home/interfaces/IFinance';
import { AllEntriesService } from './all-entries.service';
import { v4 } from 'uuid';

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

  public addFinanceEntry(depositor: string, iban: string, bic: string, withdrawalLimit?: number, pin?: number, note?: string) {
    let newFinEntry: IFinance = {
      id: v4(),
      depositor: depositor,
      iban: iban,
      bic: bic
    };

    withdrawalLimit ? newFinEntry.withdrawalLimit = withdrawalLimit : null;
    pin ? newFinEntry.pin = pin : null;
    note ? newFinEntry.note = note : null;

    this.allEntriesService.addEntry(newFinEntry);
  }

  public removeFinanceEntry(entryToDelete: IFinance) {
    this.allEntriesService.removeEntryById(entryToDelete);
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
