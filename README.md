

## Table of Contents
- [Environment](#environment)
- [User Flow](#user-flow)
- [References](#references)


## Environment (#environment)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the most recent version of the guide on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This project was build with a [Yarn](https://yarnpkg.com/en/) for package managing.

As a frontend framework for building this project [admin-on-rest](https://marmelab.com/admin-on-rest/index.html) was in use.

In order to set up local environment run following commands:

```npm install -g create-react-app
create-react-app admin-on-rest-playground
cd admin-on-rest-playground
yarn add admin-on-rest
npm install -g yarn
yarn add admin-on-rest```

To run server locally use the command `yarn start` which enables to run the app on `3000`.

### Creating faking data

With `npm` packages:
  - [json-server](https://www.npmjs.com/package/json-server)
  - [faker](https://www.npmjs.com/package/faker)
  - [lodash](https://www.npmjs.com/package/lodash)


**Important** Keep in mind to run the `json-server` on alternative port, if default `3000` already in use [https://www.npmjs.com/package/json-server#add-custom-routes](https://www.npmjs.com/package/json-server#add-custom-routes):
```json-server --watch generate.js --port 3004```


## User Flow

TBD


## References

- Tooling
  - [Yarn](https://yarnpkg.com/en/), a package manager.
- Screens
  - Login
    - [Admin-on-rest documentation on authentification](https://marmelab.com/admin-on-rest/Authentication.html)
    - [Example of the Login screen](https://github.com/marmelab/admin-on-rest/blob/master/example/authClient.js)