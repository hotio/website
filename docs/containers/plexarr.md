[:material-github: GitHub](https://github.com/hotio/plexarr){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/plexarr){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/plexarr){: .header-icons target=_blank }  
[:material-link: Plexarr](https://github.com/l3uddz/plexarr){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm hotio/plexarr ...
    ```

The default `ENTRYPOINT` is `plexarr`.

## Tags

--8<-- "tags/plexarr.md"

## Getting a Plex token for use in your configuration

Run the following command, but replace `<plex_username>` and `<plex_password>` with your actual username and password.

```shell
docker run --rm --entrypoint get-token hotio/plexarr <plex_username> <plex_password>
```

You should see something like this, if all went well:

```shell
Trying to get a Plex token...
Your Plex token is: xxxxxxxxxxxxxxxxxxxx
```
