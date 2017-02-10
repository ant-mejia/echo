# ECHO

![Screenshot](https://cloud.githubusercontent.com/assets/22961657/22836121/22c7b270-ef89-11e6-880c-8dca480fa621.png)

####Problem
Social media often promotes content based on popularity of the individual rather than the quality of the content.

---
####Opportunity
To create a platform that will encourage people to post thoughtful content by focusing on quality of what people are saying. Popularity will be determined by the post itself rather than who is posting or the relationships that the users have with one another.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

run npm install

```
run npm install for dependencies
```

### Routing

A step by step series of examples that tell you have to get a development env running

Get a user route

```
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'user',
    currentRoute: 'user'
  });
});
```

Delete a user

```
router.delete('/:id', function(req, res, next) {
 models.Users.destroy({
   where:{ id: req.params.id }
 }).then(function(user){
   res.redirect('/');
 });
});
```


### UIKIT styling

A lightweight and modular front-end framework
for developing fast and powerful web interfaces.

```
<button class="uk-button uk-button-primary uk-button-small">Small button</button>
```

## Deployment

*   [Heroku](https://echotalk.herokuapp.com/) - Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP.

## UX/UI Collaboration

*   [UX/UI Design](https://github.com/ant-mejia/echo/blob/reply/public/collaboration.key) - With the help of the UX/UI team, they help us create a user interface in order to satisfy our audience. The following link will display our problem statement and key notes about the project.

## Wireframe

*   [Echo_wireframe](https://github.com/ant-mejia/echo/blob/reply/public/Echo%20App.pdf) -
*   [ZenHub](https://www.zenhub.com/) - ZenHub tracks work where the work actually happens – GitHub. Managers get deeper insights and developers stay focused in the environment they know and love.
*   [Project's ZenHub](https://github.com/ant-mejia/echo/blob/master/views/user/edit.ejs#boards)


## Built With

*   [Expressjs](http://expressjs.com/) - The node js framework used
*   [Nodemon](https://nodemon.io/) - nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
*   [Passportjs](http://passportjs.org/) - Passport is authentication middleware for Node.js.
*   [Sequelize](http://docs.sequelizejs.com/en/v3/) - Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
*   [PostgreSQL](https://www.postgresql.org/docs/9.6/static/app-psql.html) - Tpsql is a terminal-based front-end to PostgreSQL.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.  

## Authors

*   **Anthony Mejia** - *Contributors* - [ECHO](https://github.com/ant-mejia/echo/tree/master)
*   **David Nunez** - *Contributors*
*   **Alex Diaz** - *Contributors*

See also the list of [contributors](https://github.com/ant-mejia/echo/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

*   Congrats to the Team effort
*   Inspiration
*   Dedication
*   **BIG THANKS** to the UX Team (Sohee, Chrissy, and Kathleen) for working with us and turning our idea into a tangible wireframe!!
