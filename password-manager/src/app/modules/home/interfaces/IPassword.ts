import { IEntry } from './IEntry';

export interface IPassword extends IEntry {
    password: string,
    username?: string,
    email?: string,
};

