[![Build and Deploy](https://github.com/irclogs/angular/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/irclogs/angular/actions)

# `Irclog CouchApp` - a web app to view irclogs (angular edition)

The logs are stored in couchdb.

The single page web app is written in angular and stored as a
[couchapp](http://couchapp.readthedocs.io/en/latest/intro/what-is-couchapp.html)
in couchdb attachments.

## Quick start - for developers

Install angular cli, then clone this repo, run `yarn` and `ng serve --open --port 8000`.

> The public server has localhost:8000 allowed for CORS requests, so running on port 8000
> will make the api available

## Production

```
ng build --prod
```
the release is in `./dist/irclog-ng`
