# microphone-express
![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  

Express.js provider for microphone.js Microservice framework  
[![Build Status](https://travis-ci.org/microphonejs/microphone-express.svg?branch=master)](https://travis-ci.org/microphonejs/microphone-express) [![Coverage Status](https://coveralls.io/repos/github/microphonejs/microphone-express/badge.svg?branch=master)](https://coveralls.io/github/microphonejs/microphone-express?branch=master)

Preview
==================

**Sample code using `Consul`**

```js
import {Cluster, GuidGenerator, FrameworkProvider, Configuration, Logger} from 'microphone-core';
import ConsulProvider from 'microphone-consul';
import ExpressProvider from 'microphone-express';

import express from 'express'

async function main() {
    try {
        let server = express();
        let customers = new CustomersController();
        server.get('/customers', customers.index);

        let logger = new Logger();
        let configuration = new Configuration();

        let clusterProvider = new ConsulProvider(null, logger);
        let frameworkProvider = new ExpressProvider(configuration, logger);
        let guidGenerator = new GuidGenerator();
        let cluster = new Cluster(clusterProvider, frameworkProvider, guidGenerator);

        await cluster.bootstrap(server, "customers", "v1");
        console.log("STARTED");
    } catch (error) {
        console.error(error);
    }
}
```
**Api Controller**
```js
class CustomersController {
    index(req, res) {
        res.send({
            customerName: "Test customer",
            customerId: 666
        });
    }
}
```