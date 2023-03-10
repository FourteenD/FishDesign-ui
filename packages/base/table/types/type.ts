import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import { Component, ComputedRef, CSSProperties, Ref } from 'vue';

export type RowClassNameType = (info: {
  row: Record<string, any>;
  rowIndex: string | number;
}) => string;
export type RowStyleType = (info: {
  row: Record<string, any>;
  rowIndex: string | number;
}) => CSSProperties;
export type CellClassNameType = (info: {
  row: Record<string, any>;
  column: TableColumnCtx<any>;
  rowIndex: string | number;
  columnIndex: string | number;
}) => string;
export type CellStyleType = (info: {
  row: Record<string, any>;
  column: TableColumnCtx<any>;
  rowIndex: string | number;
  columnIndex: string | number;
}) => CSSProperties;
export type BaseTableSortInfoType = {
  column: TableColumnCtx<any>;
  prop: string;
  order: 'ascending' | 'descending' | null;
};

export type BaseTableProps = {
  data: Array<Record<string, any>>;
  columns: Array<BaseTableColumnProps>;

  height?: string | number;
  maxHeight?: string | number;
  stripe?: boolean;
  border?: boolean;
  size?: 'large' | 'default' | 'small';
  fit?: boolean;

  rowClassName?: RowClassNameType;
  rowStyle?: RowStyleType | CSSProperties;

  cellClassName?: CellClassNameType;
  cellStyle?: CellStyleType | CSSProperties;

  headerRowClassName?: RowClassNameType;
  headerRowStyle?: RowStyleType | CSSProperties;

  headerCellClassName?: CellClassNameType;
  headerCellStyle?: CellStyleType | CSSProperties;

  rowKey?: ((row: Record<string, any>) => string) | string;
  defaultExpandAll?: boolean;
  expandRowKeys?: Array<string>;
  emptyText?: string;
  defaultSort?: { prop: string; order: 'ascending' | 'descending' };

  onSortChange?: (info: BaseTableSortInfoType) => void;
  onSelect?: (selection: any, row: any) => void;
  onSelectAll?: (selection: any) => void;
};

export type BaseTableColumnProps = {
  pageAllData?: Array<Record<string, any>>;
  prop?: string;
  type?: 'index' | 'expand' | '_selection';
  index?: number | ((index: number) => number);
  label?: string;
  columnKey?: string;
  width?: string | number;
  minWidth?: string | number;
  fixed?: boolean | 'left' | 'right';
  sortable?: boolean | 'custom';
  sortMethod?: (a: any, b: any) => number;
  sortBy?: Array<string> | string | ((row: any, index: number) => string);
  sortOrders?: Array<'ascending' | 'descending' | null>;
  showOverflowTooltip?: boolean;
  align?: 'left' | 'right' | 'center';
  headerAlign?: 'left' | 'right' | 'center';
  className?: string;
  labelClassName?: string;

  /**
   * ??????????????????????????????????????????????????? 1 ??? ???????????????render??????????????????
   */
  textLineClamp?: number;

  /**
   * ???????????????
   */
  renderHeader?: (info: {
    column: TableColumnCtx<any>;
    index: number;
    /**
     * ????????????????????????type = "_selection"?????????
     */
    selectionInfo?: {
      /**
       * ??????/????????????
       */
      toggleCheckAll?: () => void;
      /**
       * ??????????????????
       */
      checkboxAllChecked: ComputedRef<boolean>;
      /**
       * ??????????????????
       */
      checkboxAllIndeterminate: ComputedRef<boolean>;
      /**
       * ???????????????
       */
      selectionAllLoading: Ref<boolean>;
    };
  }) => JSX.Element;
  /**
   * ???????????????
   */
  formatter?: (info: {
    row: Record<string, any>;
    cellValue: any;
    column: TableColumnCtx<any>;
    index: number;
  }) => any;
  /**
   * ?????????cell??????
   */
  render?: (info: {
    row: Record<string, any>;
    cellValue: any;
    column: TableColumnCtx<any>;
    index: number;
  }) => JSX.Element;

  /**
   * ???????????????selection
   */
  selectionDisabled?: ((row: any) => boolean) | boolean;

  selectionRows?: Map<number | string, any>;
  hasSelectionRow?: (rowId: any) => boolean;
  addSelectionRow?: (rowId: any, row: any) => void;
  removeSelectionRow?: (rowId: any) => void;
  getSelectionRows?: () => Array<any>;
  clearSelectionRows?: () => void;

  /**
   * ????????????????????? ????????????
   */
  selectionAllBefore?: (done: Function) => Promise<void> | void;
  /**
   * ??????????????? ????????????
   */
  selectionAddBefore?: (row: any, done: Function) => Promise<void> | void;
  /**
   * ??????????????? ????????????
   */
  selectionAddAfter?: (row: any) => Promise<void> | void;
  /**
   * ??????????????? ????????????
   */
  selectionRemoveBefore?: (row: any, done: Function) => Promise<void> | void;
  /**
   * ??????????????? ????????????
   */
  selectionRemoveAfter?: (row: any) => Promise<void> | void;
};
