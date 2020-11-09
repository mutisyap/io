``` bash
docker run -p 8002:80 -v /apps/nginx-2.conf:/etc/nginx/nginx.conf nginx

docker run -p 8002:80 nginx

```

# Apache 
```
docker run -dit --name my-apache-app -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
```