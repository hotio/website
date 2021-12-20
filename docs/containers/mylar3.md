<div class="image-logo"><img src="/img/image-logos/mylar3.png" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/mylar3){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/mylar3){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/mylar3){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: quay.io](https://quay.io/repository/hotio/mylar3){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Mylar3](https://github.com/mylar3/mylar3){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name mylar3 \
            -p 8090:8090 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/mylar3
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          mylar3:
            container_name: mylar3
            image: cr.hotio.dev/hotio/mylar3
            ports:
              - "8090:8090"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
            volumes:
              - /<host_folder_config>:/config
        ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"
