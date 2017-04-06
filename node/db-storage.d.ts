import { DBRow, DataModel, DBConnect } from "./index";
import { _NanoSQLDB } from "./db-index";
export interface IHistoryPoint {
    id: number;
    historyPoint: number;
    tableID: number;
    rowKeys: number[];
    type: string;
}
export declare class _NanoSQL_Storage {
    _mode: any;
    _indexedDB: IDBDatabase;
    _parent: _NanoSQLDB;
    _tables: {
        [tableHash: number]: {
            _pk: string;
            _pkType: string;
            _name: string;
            _incriment: number;
            _index: (string | number)[];
            _secondaryIndexs: {
                [rowKey: string]: {
                    [rowValue: string]: string | number;
                };
            };
            _keys: string[];
            _defaults: any[];
            _rows: {
                [key: string]: DBRow | null;
            };
        };
    };
    _utilityTable: {
        [key: string]: {
            key: string;
            value: any;
        };
    };
    _historyLength: number;
    _doingTransaction: boolean;
    _persistent: boolean;
    _doHistory: boolean;
    _storeMemory: boolean;
    _savedArgs: DBConnect;
    _levelDBs: {
        [key: string]: any;
    };
    _transactionData: {
        [tableName: string]: {
            type: string;
            key: string | number;
            value: string;
        }[];
    };
    constructor(database: _NanoSQLDB, args: DBConnect);
    init(database: _NanoSQLDB, args: DBConnect): void;
    _execTransaction(): void;
    _clear(type: "all" | "hist", complete: Function): void;
    _delete(tableName: string, rowID: string | number, callBack?: (success: boolean) => void): void;
    _upsert(tableName: string, rowID: string | number | null, value: any, callBack?: (rowID: number | string) => void): void;
    _readRange(tableName: string, key: string, between: any[], callBack: (rows: DBRow[]) => void): void;
    _read(tableName: string, row: string | number | Function, callBack: (rows: any[]) => void): void;
    _utility(type: "r" | "w", key: string, value?: any): any;
    _newTable(tableName: string, dataModels: DataModel[]): string;
}
