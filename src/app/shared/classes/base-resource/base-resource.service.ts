import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { IFindAllResponse } from '../../interfaces/find-all-response.interface';
import { filterSortPageData } from '../../helpers/table.helper';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseResource<TData> {
  abstract mockedData: TData[];

  findAll(
    page: PageEvent,
    sort: Sort,
    filter: Record<string, unknown>,
  ): Promise<IFindAllResponse<TData>> {
    const sortedFilteredData = filterSortPageData(
      this.mockedData,
      page,
      sort,
      filter,
    );

    return Promise.resolve({
      message: 'Usuários encontrados com sucesso',
      data: sortedFilteredData,
      count: this.mockedData.length,
    });
  }

  constructor() { }
}
