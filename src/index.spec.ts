import { Settings } from 'js-settings';
import 'reflect-metadata';

import { ConfigService } from './index';

describe('ConfigService', function () {

	let
	configService: ConfigService = new ConfigService(),
	value = {
		'key-1': 'value-A-1',
		'key-2': {
			'key-1': 5,
			'key-2': {
				'key-1': true
			}
		}
	};

	Settings.set(null, value);

	it('should get', () => {

		expect( Settings.get('key-1') ).toEqual( value['key-1'] );
		expect( Settings.get('key-2') ).toEqual( value['key-2'] );
		expect( Settings.get('key-2.key-1') ).toEqual( value['key-2']['key-1'] );
		expect( Settings.get('key-2.key-2') ).toEqual( value['key-2']['key-2'] );
		expect( Settings.get('key-2.key-2.key-1') ).toEqual( value['key-2']['key-2']['key-1'] );

	});

	it('should get with defaults', () => {

		expect( configService.get('key-1') ).toEqual( value['key-1'] );
		expect( configService.get('unknown-1') ).toEqual( undefined );
		expect( configService.get('unknown-1', true) ).toEqual( true );
		expect( configService.get('unknown-1', false) ).toEqual( false );
		expect( configService.get('unknown-1', 'a string') ).toMatch( 'a string' );
		expect( configService.get('unknown-1', 5) ).toEqual( 5 );
		expect( configService.get('unknown-1', {'some-key': 'some-value'}) ).toEqual({'some-key': 'some-value'});
		expect( configService.get('unknown-1', ['some-value-1', 'some-value-2']) ).toEqual(['some-value-1', 'some-value-2']);

	});

});
