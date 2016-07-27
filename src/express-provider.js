import {FrameworkProvider} from 'volvox-core'

import express from 'express';

/**
 *
 */
export default class ExpressProvider extends FrameworkProvider {

    /**
     *
     * @param configuration
     * @param logger
     */
    constructor(configuration, logger) {
        super();
        this._configuration = configuration;
        this._logger = logger;
    }

    /**
     *
     * @param server
     * @param serviceName
     * @param version
     * @returns {Promise}
     */
    start(server, serviceName, version) {
        let app = server || express();

        app.get('/status', (req, res) => {
            res.status(200).send('ok');
        });

        return new Promise(async (resolve, reject) => {
            var port = await this._configuration.getPort() || 3000;
            let uri = `http://localhost:${port}`;

            let serverInstance = app.listen(port, (err) => {
                if (err) return reject(err);

                this._logger.info(`Example app listening on port ${port}!`);
                resolve({ serverInstance: serverInstance, uri: uri });
            });
        })
    }
}