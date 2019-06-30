# 6/30 Notes

* Initializing node.js website: express *name of website* --view=pug
* To automatically update website: npm install -g nodemon
* Link script to run with updates by adding in "scripts" in package.json: "devstart": "nodemon ./bin/www"
* To run server: DEBUG=*name of website*:* npm run devstart (in this case *name of website* = mark-to-market)
* Ran into error: cannot find http-errors - needed to run: npm install -g
