<div class="image-logo no-logo"><img src="/img/pullio.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/crop){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/crop){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/crop){: .header-icons target=_blank rel="noopener noreferrer" }
[:octicons-link-16: Crop](https://github.com/l3uddz/crop){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm cr.hotio.dev/hotio/crop ...
        ```

The default `ENTRYPOINT` is `crop`.

The official Rclone is included at `/usr/local/bin/rclone`, the non official version from [l3uddz](https://github.com/l3uddz) is included at `/usr/local/bin/gclone` and symlinked at `/usr/local/bin/lclone`.

--8<-- "includes/tags.md"
