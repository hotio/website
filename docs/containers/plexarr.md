<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/plexarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/plexarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/plexarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Plexarr](https://github.com/l3uddz/plexarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm hotio/plexarr ...
        ```

The default `ENTRYPOINT` is `plexarr`.

--8<-- "includes/tags.md"

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
