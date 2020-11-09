# Enable auth in docker spring


- Run Mongodb in docker
``` bash
docker run -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD='test1' -p 23124:27017 mongo
```

- Spring config:
``` yaml
spring:
  data:
    mongodb:
      host: localhost
      port: 27017
      database: mydb
      username: user
      password: test1
      authentication-database: admin # this is key, else the auth will fail.
```


- Test the authentication
``` bash
mongo -u user -p 'test1' --authenticationDatabase "admin" --host 127.0.0.1 --port 27017