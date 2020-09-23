import { Component, OnInit } from '@angular/core';
import { AllEntriesService } from 'src/app/core/services/all-entries.service';
import { IEntry } from '../../interfaces/IEntry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  public entryList: IEntry[];

  constructor(private allEntriesService: AllEntriesService) { }

  ngOnInit(): void {
    this.allEntriesService.addEntry({ id: "12343", title: "Amazon" });
    this.allEntriesService.addEntry({ id: "5679", title: "Facebook" });
    this.entryList = this.allEntriesService.allEntries;
  }
}
