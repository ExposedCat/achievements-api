<div align="center">
    <h1>HTTP API template on Express + MongoDB</h1>

[![Developer](https://img.shields.io/badge/Heroku-Compatible-gray?style=for-the-badge&logo=heroku&labelColor=purple)](https://github.com/ExposedCat/express-mongodb-template#via-heroku)
[![Developer](https://img.shields.io/badge/Docker-Support-gray?style=for-the-badge&logo=docker&labelColor=blue&logoColor=white)](https://github.com/ExposedCat/express-mongodb-template#-running)
[![Developer](https://img.shields.io/badge/Swagger-Docs-green?style=for-the-badge&logo=swagger)](https://app.swaggerhub.com/apis-docs/artem-prokop/express-mongodb-template/1.0.0)

<img src="https://chpic.su/_data/stickers/g/gloomycat/gloomycat_023.webp" alt="App preview">

</div>

<div align="center">
    <h2>⭐️ Features</h2>
</div>
<ul>
    <li>Convenient for frontend usage</li>
    <li>Strict code formatting rules</li>
    <li>Scalable file architecture</li>
    <li>100% of API <a href="https://app.swaggerhub.com/apis-docs/artem-prokop/express-mongodb-template/1.0.0">documented</a></li>
    <li><a href="https://github.com/ExposedCat/express-mongodb-template#-running">Docker</a> support</li>
    <li><a href="https://heroku.com">Heroku</a> support</li>
    <li>Automatic tests</li>
    <li>Well-readable git repository with beautiful README</li>
</ul>

<div align="center">
    <h2>⚙️ Stack</h2>
</div>
<ul>
    <li>Programming language: Node.JS</li>
    <li>API: Express.JS</li>
    <li>Users storage: Mongodb, Mongoose.JS</li>
    <li>Testing tools: Mocha, Chai</li>
    <li>Running tools: Nodemon, Docker, Heroku</li>
</ul>

<div align="center">
    <h2>🔌 Running</h2>
</div>

<div align="center">
    <h2>via Docker</h2>
</div>

0. Install [Docker](https://docs.docker.com/get-docker/)
1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/express-mongodb-template.git
```

2. Go to project root:

```bash
cd express-mongodb-template
```

3. Create copy of `.env-example` called `.env` and replace example data with yours
4. Build app image:

```bash
docker build -t express-mongodb-api .
```

5.

-   Start app (map local port 3000 to the same in container):

```bash
docker run -dp 3000:3000 express-mongodb-api
```

-   Start app with local DB image:

1. Add `DB_NAME` in `.env` file and put local db name there, for instance `express-mongodb-users`
2. Use `express-mongodb-db:27017` as database URI in `DB_CONNECTION_STRING`
3. Build and run app and local DB:

```bash
docker-compose up -d --build
```

**Done**.

<div align="center">
    <h2>via Nodemon</h2>
    <h4>for development</h4>
</div>

0. Install and run <a href="https://www.mongodb.com/try/download/community">MongoDB server</a>
1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/express-mongodb-template.git
```

2. Go to project root:

```bash
cd express-mongodb-template
```

3. Create copy of `.env-example` called `.env` and replace example data with yours
4. Install dependencies:

```bash
npm install
```

5. Start app:

```bash
npm run dev
```

**Done**.

<div align="center">
    <h2>via Heroku</h2>
</div>

0. Get any cloud database, for ex. <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>
1. Clone this repo:

```bash
git clone https://github.com/ExposedCat/express-mongodb-template.git
```

2. Go to project root:

```bash
cd express-mongodb-template
```

3. At <a href="https://heroku.com">Heroku</a> → `App` → `Settings` → `Config vars`  
   Set environment variables:  
    Connection string of MongoDB database

    ```bash
    DB_CONNECTION_STRING
    ```

    Secret for generating JWT

    ```bash
    JWT_SECRET
    ```

    Port for API to run on

    ```bash
    PORT
    ```

    Secret for Express.JS session

    ```bash
    SESSION_SECRET
    ```

4. Follow instructions at <a href="https://heroku.com">Heroku</a> → `App` → `Deploy`

**Done**.

<div align="center">
    <h2>🐛 Testing</h2>
</div>

1. Create copy of `.env-example` called `.env-test` and replace example data with your test data
2. Run tests:

```bash
npm run test
```

<div align="center">
    <h2>🔩 Dependencies</h2>
</div>
<h4>Production</h4>
<ul>
    <li>Express.JS, Express-Session</li>
    <li>Async Json-Web-Token</li>
    <li>Mongoose.JS</li>
    <li>DotEnv</li>
    <li>Helmet</li>
    <li>Bcrypt</li>
</ul>
<h4>Development</h4>
<ul>
    <li>Nodemon</li>
    <li>Prettier</li>
</ul>
