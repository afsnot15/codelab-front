import { Injectable, Injector } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { IResponse } from '../../interfaces/find-all-response.interface';
import { filterSortPageData } from '../../helpers/table.helper';
import { HttpClient } from '@angular/common/http';
import { EApiInfo } from '../../enums/api/api-info';
import { Observable, take } from 'rxjs';
import { handleFindAllFilter } from '../../helpers/filter.helper';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseResourceService<TData> {
  protected readonly _http!: HttpClient;
  private url!: string;

  constructor(
    protected readonly _injector: Injector,
    path: string,
  ) {
    this._http = this._injector.get(HttpClient);
    this.url = `${EApiInfo.BASE_URL}${path}`;
  }

  findAll(
    page: PageEvent,
    sort: Sort,
    filter: Record<string, unknown>,
  ): Observable<IResponse<TData[]>> {
    const orderParam = JSON.stringify({
      column: sort.active,
      sort: sort.direction,
    });

    const pageParam = page.pageIndex;
    const sizeParam = page.pageSize;
    const filterQuery = handleFindAllFilter(filter);

    return this._http
      .get<
        IResponse<TData[]>
      >(`${this.url}/${pageParam}/${sizeParam}/${orderParam}?filter=${filterQuery}`)
      .pipe(take(1));
  }

  create(payload: TData): Observable<IResponse<TData>> {
    return this._http.post<IResponse<TData>>(this.url, payload).pipe(take(1));
  }

  updateById(id: number, data: TData): Observable<IResponse<TData>> {
    return this._http
      .patch<IResponse<TData>>(`${this.url}/${id}`, data)
      .pipe(take(1));
  }

  findOneById(id: number): Observable<IResponse<TData>> {
    return this._http.get<IResponse<TData>>(`${this.url}/${id}`).pipe(take(1));
  }

  delete(id: number): Observable<IResponse<boolean>> {
    return this._http.delete<IResponse<boolean>>(`${this.url}/${id}`).pipe(take(1));
  }
}
