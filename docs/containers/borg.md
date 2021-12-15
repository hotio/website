<div class="image-logo"><img src="/img/image-logos/borg.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/borg){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/borg){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/borg){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Borg](https://github.com/borgbackup/borg){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm cr.hotio.dev/hotio/borg ...
        ```

The default `ENTRYPOINT` is `borg`.

--8<-- "includes/tags.md"
