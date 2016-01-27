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
            var port = this._configuration.getPort() || 3000;
            let serverInstance = app.listen(port, (err)=> {
                if (err) return reject(err);

                this._logger.info(`Example app listening on port ${port}!`);
                resolve(serverInstance);
            });
        })
    }
}