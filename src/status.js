export default class StatusController {
    static respond(req, res, next) {
        res.status(200).send('ok');
        next();
    }
}