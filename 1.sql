CREATE TABLE  person  (
     id  MEDIUMINT(8) UNSIGNED NOT NULL AUTO_INCREMENT,
     username  JSON NOT NULL,
     password  JSON NOT NULL,
     email_id  JSON NOT NULL,
    PRIMARY KEY ( id )
);

INSERT INTO person (username, password,email_id) VALUES('{"username":"ashli"}','{"password":"ashli"}','{"email_id":"ashli@gmail.com"}');
     
SELECT json_length(*) FROM person; 

SELECT JSON_TYPE(username) from person;

SELECT JSON_OBJECT('key1', 1, 'key2', 'abc') from person;