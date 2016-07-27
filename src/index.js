import ExpressProvider from './express-provider';
import {Configuration} from 'volvox-core'
import bunyan from 'bunyan'

export default  (config, logger)=>{
    return new ExpressProvider(
        config || new Configuration(),
        logger ||  bunyan.createLogger({name: "volvox.js"})
    )
};