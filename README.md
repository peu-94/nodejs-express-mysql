## NPM packages needed to be install

npm install express mysql body-parser --save

npm install cors --save 

## DATABASE configuration

host: 'localhost' => The IP Address where the database resides.

user: 'root' => username of the database instance.

password: 'root' => password for the database instance.

database: 'test' => schema for the database instance.

## Tables Created

CREATE TABLE test.`states` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL,
  `country_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`state_id`) 
);

CREATE TABLE test.`authentication_master` (
  `authentication_id` int NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`authentication_id`) 
);

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
