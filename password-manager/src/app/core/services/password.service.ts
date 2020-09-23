import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/home/interfaces/IEntry';
import { IPassword } from 'src/app/modules/home/interfaces/IPassword';
import { CoreModule } from '../core.module';
import { AllEntriesService } from './all-entries.service';

@Injectable({
  providedIn: CoreModule
})

export class PasswordService {

  private pwdEntries: IPassword[];

  constructor(private allEntriesService: AllEntriesService) { }

  public isPasswordEntry(entry: IEntry): entry is IPassword {
    return (entry as IPassword).password !== undefined;
  }

  get passwordEntries(): IPassword[] {
    this.pwdEntries = this.allEntriesService.allEntries.map(entry => {
      if (this.isPasswordEntry(entry)) {
        return entry;
      }
    }) as IPassword[];

    return this.pwdEntries;
  }
}
