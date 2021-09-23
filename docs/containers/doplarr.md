<div class="image-logo"><img src="/img/image-logos/doplarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Doplarr](https://github.com/kiranshila/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name doplarr \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -e BOT_TOKEN="your_bot_token" \
            -e ROLE_ID="your_role_id" \
            -e RADARR_URL="http://radarr:7878" \
            -e RADARR_API="your_radarr_api_key" \
            -e SONARR_URL="http://sonarr:8989" \
            -e SONARR_API="your_sonarr_api_key" \
            -e OVERSEERR_URL="http://overseerr:5055" \
            -e OVERSEERR_API="your_overseerr_api_key" \
            -v /<host_folder_config>:/config \
            hotio/doplarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          doplarr:
            container_name: doplarr
            image: hotio/doplarr
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - BOT_TOKEN=your_bot_token
              - ROLE_ID=your_role_id
              - RADARR_URL=http://radarr:7878
              - RADARR_API=your_radarr_api_key
              - SONARR_URL=http://sonarr:8989
              - SONARR_API=your_sonarr_api_key
              - OVERSEERR_URL=http://overseerr:5055
              - OVERSEERR_API=your_overseerr_api_key
            volumes:
              - /<host_folder_config>:/config
        ```

--8<-- "includes/tags.md"
