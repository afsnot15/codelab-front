import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { getPaginatorIntl } from '../../helpers/paginator-intl.helper';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';

@Component({
  template: '',
})
export abstract class BaseConsultaComponent<TData> {
  @ViewChild(MatPaginator) paginatorEl!: MatPaginator;

  abstract displayedColumns: string[];
  abstract filterFormGroup: FormGroup;
  abstract filterFields: IFormField[];

  dataSource = new MatTableDataSource<TData>([]);
  sort: Sort = { active: 'id', direction: 'asc' };
  page: PageEvent = { pageIndex: 0, pageSize: 5, length: 0 };

  loading = false;

  get filter() {
    return this.filterFormGroup.getRawValue();
  }

  ngOnInit() {
    this.search();
  }

  ngAfterViewInit(): void {
    this.paginatorEl._intl = getPaginatorIntl(this.paginatorEl._intl);
  }

  search() {
    this.loading = true;

    this._service
      .findAll(this.page, this.sort, this.filter)
      .then((response) => {
        this.dataSource.data = response.data;
        this.paginatorEl.length = response.count;
      })
      .finally(() => {
        setTimeout(() => (this.loading = false), 2000);
      });
  }

  applySort(sort: Sort) {
    this.sort = sort;
    this.search();
  }

  applyPage(page: PageEvent) {
    this.page = page;
    this.search();
  }

  constructor(private readonly _service: BaseResourceService<TData>) {}
}
