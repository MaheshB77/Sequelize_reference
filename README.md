# Sequelize reference

## Dependencies

> \$ npm install express body-parser sequelize pg pg-hstore

---

## Steps for using Sequelize

> Step-1

-   Import Sequelize

```javascript
const Sequelize = require("Sequelize");
```

-   Configure the database

```javascript
const db = new Sequelize("databaseName", "userName", "password", {
    host: "localhost",
    dialect: "postgres"
});
```
