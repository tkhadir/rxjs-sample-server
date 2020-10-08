const rxjs = require('rxjs')
module.exports = (app) => {
    let getHelloWorld$ = new rxjs.Subject()

    app.get('/', (req, res) => getHelloWorld$.next([req, res]))

    getHelloWorld$
    .subscribe((args) => {
            let [req, res] = args
            res.send('hello world')
    })
}
