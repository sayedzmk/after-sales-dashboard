import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  constructor(private storage: LocalStorageService) {}
  save(key: string, value: any) {
    this.storage.store(key, value);
  }

  retrive(key: string): any {
    return this.storage.retrieve(key);
  }

  delete(key: string) {
    this.storage.store(key, null);
  }
}
