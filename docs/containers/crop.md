<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/crop){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/crop){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/crop){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Crop](https://github.com/l3uddz/crop){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm hotio/crop ...
        ```

The default `ENTRYPOINT` is `crop`.

The official Rclone is included at `/usr/local/bin/rclone`, the non official version from [l3uddz](https://github.com/l3uddz) is included at `/usr/local/bin/gclone` and symlinked at `/usr/local/bin/lclone`.

--8<-- "includes/tags.md"
