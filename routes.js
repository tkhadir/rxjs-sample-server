const rxjs = require('rxjs')
module.exports = (app) => {
    let listener$ = new rxjs.Subject()

    app.get('/', (req, res) => listener$.next([req, res]))

    listener$
    .subscribe((args) => {
            let [req, res] = args
            res.send('hello world')
    })
}
