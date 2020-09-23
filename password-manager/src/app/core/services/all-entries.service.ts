import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/home/interfaces/IEntry';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})

export class AllEntriesService {

  private entries: IEntry[] = [];

  constructor() { }

  get allEntries(): IEntry[] {
    return this.entries;
  }

  public addEntry(newEntry: IEntry) {
    this.entries.push(newEntry);
  }

  public removeEntryById(entryToDelete: IEntry) {
    this.entries.filter(entry => entry.id != entryToDelete.id);
  }
}
