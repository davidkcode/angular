import { IEntry } from './IEntry';

export interface IPassword extends IEntry {
    username?: string,
    password?: string,
    email?: string,
};

