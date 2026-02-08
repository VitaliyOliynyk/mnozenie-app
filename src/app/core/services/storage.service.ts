import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    /**
     * Saves data to local storage.
     */
    save(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    /**
     * Loads data from local storage.
     */
    load(key: string): string | null {
        return localStorage.getItem(key);
    }

    /**
     * Removes data from local storage.
     */
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
