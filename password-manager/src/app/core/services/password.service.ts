import { Injectable } from '@angular/core';
import { IEntry } from 'src/app/modules/home/interfaces/IEntry';
import { IPassword } from 'src/app/modules/home/interfaces/IPassword';
import { CoreModule } from '../core.module';
import { AllEntriesService } from './all-entries.service';
import { v4 } from 'uuid';

@Injectable({
  providedIn: CoreModule
})

export class PasswordService {

  private pwdEntries: IPassword[];

  constructor(private allEntriesService: AllEntriesService) { }

  public isPasswordEntry(entry: IEntry): entry is IPassword {
    return (entry as IPassword).password !== undefined;
  }

  public addPasswordEntry(title: string, password: string, username?: string, email?: string, pin?: number, note?: string) {
    let newPwdEntry: IPassword = {
      id: v4(),
      title: title,
      password: password
    };

    username ? newPwdEntry.username = username : null;
    email ? newPwdEntry.email = email : null;
    pin ? newPwdEntry.pin = pin : null;
    note ? newPwdEntry.note = note : null;

    this.allEntriesService.addEntry(newPwdEntry);
  }

  public removePasswordEntry(entryToDelete: IPassword) {
    this.allEntriesService.removeEntryById(entryToDelete);
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
