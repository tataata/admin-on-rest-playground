

## Table of Contents
- [Environment](#environment)
- [Access](#access)
- [References](#references)


## Environment (#environment)

The project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The most recent version of the guide on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This project was build with a [Yarn](https://yarnpkg.com/en/) for package managing.

As a frontend framework for building this project [admin-on-rest](https://marmelab.com/admin-on-rest/index.html) was in use.

In order to set up local environment run following commands:

```npm install -g create-react-app
create-react-app admin-on-rest-playground
cd admin-on-rest-playground
yarn add admin-on-rest
npm install -g yarn
yarn add admin-on-rest
```

To run server locally use the command `yarn start` which enables to run the app on `3000`.

### Faking data

With `npm` packages:
  - [json-server](https://www.npmjs.com/package/json-server)
  - [faker](https://www.npmjs.com/package/faker)
  - [lodash](https://www.npmjs.com/package/lodash)

Faked data generates in `generate.js`.

**Important** Keep in mind to run the `json-server` on alternative port, if default `3000` already in use [https://www.npmjs.com/package/json-server#add-custom-routes](https://www.npmjs.com/package/json-server#add-custom-routes):
```json-server --watch generate.js --port 3004```


### Summary

In order to run local environment two processes should run:
1) local server `yarn start`
2) json-server for faked data `json-server --watch generate.js --port 3004`


## Access

Admin only accessable for the user with following credentials: **demo / lookatme**


## References

- The base
  - [Yarn](https://yarnpkg.com/en/), a package manager
  - [admin-on-rest](https://marmelab.com/admin-on-rest/index.html) frontend framework
  - [json-server](https://www.npmjs.com/package/json-server)
  - [faker](https://www.npmjs.com/package/faker)
  - [lodash](https://www.npmjs.com/package/lodash)
- Authentification
  - [Admin-on-rest documentation on authentification](https://marmelab.com/admin-on-rest/Authentication.html)
  - [Example of the Login screen](https://github.com/marmelab/admin-on-rest/blob/master/example/authClient.js)
