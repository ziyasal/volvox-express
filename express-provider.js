import {FrameworkProvider} from 'microphone-core'

import express from 'express';
import StatusController from './status'

export default class ExpressProvider extends FrameworkProvider {

    constructor(configuration, logger) {
        super();
        this._configuration = configuration;
        this._logger = logger;
    }

    start(server, serviceName, version) {
        let app = server || express();

        app.get('/status', StatusController.respond);

        return new Promise((resolve, reject)=> {
            let serverInstance = app.listen(this._configuration.getPort() || 3000, (err)=> {
                if (err) return reject(err);

                this._logger.info(`Example app listening on port ${this._configuration.getPort() || 3000}!`);
                resolve(serverInstance);
            });
        })
    }
}