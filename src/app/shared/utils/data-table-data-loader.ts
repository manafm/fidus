import { SpinnerService } from './../services/spinner.service';
import { TableParams } from '../shared-domain/domain/table-params';
import {LazyLoadEvent} from "primeng/api";

/**
 * Data Table Data Loader
 *
 * This class is used to manage the data load with pagination process in Data Table.
 * Just implements <p-dataTable> with following data :
 *
 * <p-dataTable
 *    [lazy]="true"
 *    [rows]="tableParams.pageSize"
 *    [value]="dataTableList"
 *    [totalRecords]="dataTableCount"
 *    [multiSortMeta]="tableParams.multiSortMeta"
 *    [rowsPerPageOptions]="[5,10,20,30]"
 *    [paginator]="true"
 *    (onLazyLoad)="loadData($event)"
 *    emptyMessage="{{ 'NoElementFound' | translate }}">
 */
export abstract class DataTableDataLoader<T> {
  private service;
  protected spinnerService: SpinnerService;
  dataTableList: T [] = [];
  dataTableCount: number;

  tableParams: TableParams = {
    multiSortMeta: [],
    page: 0,
    pageSize: 30,
    filters : [],
    defaultFilters: []
  };

  constructor(service: any, spinnerService: SpinnerService) {
    this.service = service;
    this.spinnerService = spinnerService;

  }

  /**
   * Init count var used in [totalRecords]
   */
  protected count(...params) {
    this.service.count(this.tableParams, ...params).subscribe(count => {
      this.dataTableCount = count;
    });
  }

  /**
   * Init list var used in [value]
   */
  protected find(...params) {
    this.spinnerService.show();
    this.service.find(this.tableParams, ...params).subscribe(lists => {
      this.dataTableList = lists;
      this.spinnerService.hide();
    });
  }

  /**
   * Load Data based on table params
   * @param event
   */
  loadData(event: LazyLoadEvent, ...params) {

    let newPage = this.tableParams.page;

    if (event.first !== 0) {
      newPage = event.first / event.rows;
    } else {
      newPage = 0;
    }

    if (event.sortField) {

      let sort;

      for (let i = 0; i < this.tableParams.multiSortMeta.length; i++) {
        if (this.tableParams.multiSortMeta[i].field === event.sortField) {
          this.tableParams.multiSortMeta.splice(i, 1);
        }
      }

      sort = { field: event.sortField, order: event.sortOrder };

      this.tableParams.multiSortMeta = [sort];
    }

    this.tableParams.page = newPage;
    this.tableParams.pageSize = event.rows;

    this.tableParams.filters = [];

    // use defaultFilters array to initialize default filters to be used during ngInit
    if (this.tableParams.defaultFilters) {
      for (const i of this.tableParams.defaultFilters) {
        this.tableParams.filters.push({field: this.tableParams.defaultFilters[i].field, value: this.tableParams.defaultFilters[i].value});
      }
    }

    // empty array of default filter as it should only be used once at init.
    this.tableParams.defaultFilters = [];


    for (const i in event.filters) {
        if ('matchMode' !== i) {
          this.tableParams.filters.push({field: i, value: event.filters[i].value});
        }
    }

    this.count(...params);
    this.find(...params);
  }
}
