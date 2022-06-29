import fs from 'fs-extra';

export default class MikuLogger {
	constructor(logDir: string) {
		fs.mkdirSync(logDir);
	}
}