<div class="image-logo"><img src="/img/image-logos/jellyfin.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jellyfin){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/jellyfin){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/jellyfin){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Jellyfin](https://github.com/jellyfin/jellyfin){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name jellyfin \
            -p 8096:8096 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -v /<host_folder_config>:/config \
            cr.hotio.dev/hotio/jellyfin
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          jellyfin:
            container_name: jellyfin
            image: cr.hotio.dev/hotio/jellyfin
            ports:
              - "8096:8096"
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

## Configuration

The following jellyfin path locations are used by default.

```shell
JELLYFIN_CONFIG_DIR="/config"
JELLYFIN_DATA_DIR="/config/data"
JELLYFIN_LOG_DIR="/config/log"
JELLYFIN_CACHE_DIR="/config/cache"
```

You can override these locations by setting them to a different value with a docker environment variable.

## Hardware support

To make your hardware devices available inside the container use the following argument `--device=/dev/dri:/dev/dri` for Intel QuickSync and `--device=/dev/dvb:/dev/dvb` for a tuner. NVIDIA users should go visit the [NVIDIA github](https://github.com/NVIDIA/nvidia-docker){: target=_blank rel="noopener noreferrer" } page for instructions. For Raspberry Pi OpenMAX you'll need to use `--device=/dev/vchiq:/dev/vchiq -v /opt/vc/lib:/opt/vc/lib`, V4L2 will need `--device=/dev/video10:/dev/video10 --device=/dev/video11:/dev/video11 --device=/dev/video12:/dev/video12` and MMAL needs `--device=/dev/vcsm:/dev/vcsm` or `--device=/dev/vc-mem:/dev/vc-mem`.
