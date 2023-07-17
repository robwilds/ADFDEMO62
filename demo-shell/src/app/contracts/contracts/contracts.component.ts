import { Component, OnInit, ViewChild } from '@angular/core';
import { FileViewComponent } from '../../components/file-view/file-view.component';
import { BreadcrumbDemoComponent } from '../../components/breadcrumb-demo/breadcrumb-demo.component';
import { SearchFilterChipsComponent } from '../../components/search/search-filter-chips.component';
import { Pagination, ResultSetPaging } from '@alfresco/js-api';
import { SearchForm, SearchQueryBuilderService } from '@alfresco/adf-content-services';
//import { ProcessService, ProcessInstance, ProcessInstanceVariable,ProcessDefinitionRepresentation, ProcessFilterParamRepresentationModel, TaskDetailsModel } from '@alfresco/adf-process-services';
import { AppDefinitionRepresentationModel } from '@alfresco/adf-process-services';
import { Router } from '@angular/router';

@Component({
  selector: 'contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {


  @ViewChild(FileViewComponent) fileViewComponent;

  @ViewChild(BreadcrumbDemoComponent) breadCrumbComponent;
  
  @ViewChild(SearchFilterChipsComponent) search:SearchFilterChipsComponent;

  constructor(private queryBuilder: SearchQueryBuilderService, private router: Router) {}

  onAppClicked(app: AppDefinitionRepresentationModel) {
    console.log("process app id  - >", app.id)
    this.router.navigate(['/activiti/apps', app.id,'processes','101']);
  }


  queryParamName = 'q';
  searchedWord = '';
  data: ResultSetPaging;
  pagination: Pagination;
  isLoading = true;

  sorting = ['name', 'asc'];
  searchForms: SearchForm[];
  //showHeader = ShowHeaderMode.Always;

  onRefreshPagination(pagination: Pagination) {
    this.queryBuilder.paging = {
        maxItems: pagination.maxItems,
        skipCount: pagination.skipCount
    };
    this.queryBuilder.update();
}
  showFile(event) {
    const entry = event.value.entry;
    if (entry && entry.isFile) {
        this.fileViewComponent.preview.showResource(entry.id);
    }
}


onDeleteElementSuccess() {
  this.queryBuilder.execute();
}

  ngOnInit(): void {
  }

}
