import { Component, OnInit, ViewChild } from '@angular/core';
import { FileViewComponent } from '../../components/file-view/file-view.component';
import { BreadcrumbDemoComponent } from '../../components/breadcrumb-demo/breadcrumb-demo.component';
import { SearchFilterChipsComponent } from '../../components/search/search-filter-chips.component';
import { Pagination, ResultSetPaging } from '@alfresco/js-api';
import { SearchForm, SearchQueryBuilderService } from '@alfresco/adf-content-services';
//import { ProcessService, ProcessInstance, ProcessInstanceVariable,ProcessDefinitionRepresentation, ProcessFilterParamRepresentationModel, TaskDetailsModel } from '@alfresco/adf-process-services';
import { AppDefinitionRepresentationModel } from '@alfresco/adf-process-services';
import { Router } from '@angular/router';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  
  panelOpenState = false;

  public userForm:FormGroup; // variable is created of type FormGroup is created
  
  first_name: string = ""; // Variable is created to show the input value below the button


  @ViewChild(FileViewComponent) fileViewComponent;

  @ViewChild(BreadcrumbDemoComponent) breadCrumbComponent;
  
  @ViewChild(SearchFilterChipsComponent) search:SearchFilterChipsComponent;

  constructor(private queryBuilder: SearchQueryBuilderService, private router: Router, private fb: FormBuilder) {

     // Form element defined below
     this.userForm = this.fb.group({
      first_name: ''});
}

setValue() {
  this.first_name=this.userForm.get('first_name')?.value; // input value retrieved
}
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
