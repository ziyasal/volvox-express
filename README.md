# volvox-express
![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  ![](http://svgporn.com/logos/express.svg)  

Express.js provider for volvox.js Microservice framework  
[![Build Status](https://travis-ci.org/volvoxjs/volvox-express.svg?branch=master)](https://travis-ci.org/volvoxjs/volvox-express) [![Coverage Status](https://coveralls.io/repos/github/volvoxjs/volvox-express/badge.svg?branch=master)](https://coveralls.io/github/volvoxjs/volvox-express?branch=master)

Preview
==================

**Sample code using `Consul`**

```js
import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vexpress from 'volvox-express';

import express from 'express'

async function main() {
    let server = express();

    server.get('/customers', (req, res) => {
       res.send({
            customerName: "Test customer",
            customerId: 666
        });
    });

    let volvox = new Volvox(vconsul(), vexpress());
    await volvox.bootstrap(server, "customers", "v1");
}

main();
```
