export interface RequestInterface {
    [key: string]: any;
  }
  
  export interface ListInterface {
    [key: string]: any;
  }
  export interface PaginationType {
    total_pages: number;
    current_page: number;
    total: number;
    count: number;
    per_page: number;
  }
  export const ListRepository: Array<ListInterface> = [];
  export const PaginationRepository: PaginationType = {
    total_pages: 0,
    current_page: 0,
    total: 0,
    count: 0,
    per_page: 0,
  };
  export const defineState = () => {
    return {
      lists: ListRepository,
      areas: [],
      meta: {},
      pagination: {
        total_pages: 0,
        current_page: 0,
      },
      entry: {},
      success: false,
      propsMeta: {},
    };
  };
  export const defineSaveList = (store: any, data: any) => {
    store.$patch((state: any) => {
      state.lists = data.data;
      if (typeof data.meta !== "undefined") {
        state.pagination = data.meta.pagination;
      }
    });
  };
  