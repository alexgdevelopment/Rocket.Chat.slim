import { Migrations } from '../migrations';
import { settings } from '../../settings';
import { Settings } from '../../models';

Migrations.add({
	version: 149,
	up() {
		if (settings.get('Accounts_OAuth_Gitlab')) {
			const setting = Settings.findById('Accounts_OAuth_Gitlab_identity_path');
			const newValue = '/api/v3/user';

			if (setting) {
				Settings.updateValueById('Accounts_OAuth_Gitlab_identity_path', newValue);
			} else {
				Settings.createWithIdAndValue('Accounts_OAuth_Gitlab_identity_path', newValue);
			}
		}
	},
	down() {
		// Down migration does not apply in this case
	},
});