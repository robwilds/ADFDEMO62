import { Component, OnInit } from '@angular/core';
import { SearchFilterChipsComponent } from '../../components/search/search-filter-chips.component';
import { SearchBarComponent } from '../../components/search/search-bar.component';

@Component({
  selector: 'contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private SearchBarComponent:SearchBarComponent) {
()
    SearchBarComponent.onSearchSubmit()
   }

  ngOnInit(): void {
  }

}
