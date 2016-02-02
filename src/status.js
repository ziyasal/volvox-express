export default class StatusController {
    static respond(req, res) {
        res.status(200).send('ok');
    }
}