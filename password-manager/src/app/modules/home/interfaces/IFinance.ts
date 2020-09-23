import { IEntry } from './IEntry';

export interface IFinance extends IEntry {
    depositor: string,
    iban: string,
    bic: string,
    withdrawalLimit?: number,
};