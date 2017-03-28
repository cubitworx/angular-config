import { Injectable } from '@angular/core';
import { Settings } from 'js-settings';

@Injectable()
export class ConfigService {

	public get(key: string, otherwise?: any): any {
		return Settings.get( key, otherwise );
	}

}
