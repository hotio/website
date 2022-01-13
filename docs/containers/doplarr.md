<div class="image-logo"><img src="/img/image-logos/doplarr.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: quay.io](https://quay.io/repository/hotio/doplarr){: .header-icons target=_blank rel="noopener noreferrer" }  
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
            -e DISCORD__TOKEN="your_bot_token" \
            -e DISCORD__ROLE_ID="your_role_id" \
            -e DISCORD__MAX_RESULTS=25 \
            -e RADARR__URL="http://radarr:7878" \
            -e RADARR__API="your_radarr_api_key" \
            -e RADARR__QUALITY_PROFILE="your_default_quality_profile_name" \
            -e SONARR__URL="http://sonarr:8989" \
            -e SONARR__API="your_sonarr_api_key" \
            -e SONARR__QUALITY_PROFILE="your_default_quality_profile_name" \
            -e SONARR__LANGUAGE_PROFILE="your_default_language_profile_name" \
            -e OVERSEERR__URL="http://overseerr:5055" \
            -e OVERSEERR__API="your_overseerr_api_key" \
            -e OVERSEERR__DEFAULT_ID="your_default_id" \
            -e PARTIAL_SEASONS=true \
            -e LOG_LEVEL=:info \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/doplarr
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          doplarr:
            container_name: doplarr
            image: cr.hotio.dev/hotio/doplarr
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - DISCORD__TOKEN=your_bot_token
              - DISCORD__ROLE_ID=your_role_id
              - DISCORD__MAX_RESULTS=25
              - RADARR__URL=http://radarr:7878
              - RADARR__API=your_radarr_api_key
              - RADARR__QUALITY_PROFILE=your_default_quality_profile_name
              - SONARR__URL=http://sonarr:8989
              - SONARR__API=your_sonarr_api_key
              - SONARR__QUALITY_PROFILE=your_default_quality_profile_name
              - SONARR__LANGUAGE_PROFILE=your_default_language_profile_name
              - OVERSEERR__URL=http://overseerr:5055
              - OVERSEERR__API=your_overseerr_api_key
              - OVERSEERR__DEFAULT_ID=your_default_id
              - PARTIAL_SEASONS=true
              - LOG_LEVEL=:info
            volumes:
              - /<host_folder_config>:/config
        ```

You can either use the environment variables `RADARR__...` + `SONARR__...` combo or just `OVERSEERR__...`, depending on your usage of Overseerr or not. See the Doplarr documentation on how to get your `DISCORD__TOKEN` and the Discord documentation for your `DISCORD__ROLE_ID`.

--8<-- "includes/tags.md"
