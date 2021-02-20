<img src="https://hotio.dev/img/jellyfin.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/jellyfin){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/jellyfin){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/jellyfin){: .header-icons target=_blank }  
[:material-link: Jellyfin](https://github.com/jellyfin/jellyfin){: .header-icons target=_blank }  

## Starting the container

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
        hotio/jellyfin
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      jellyfin:
        container_name: jellyfin
        image: hotio/jellyfin
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

## Tags

--8<-- "tags/jellyfin.md"

## Configuration

The following jellyfin path locations are used by default.

```shell
JELLYFIN_CONFIG_DIR="/config/app"
JELLYFIN_DATA_DIR="/config/app/data"
JELLYFIN_LOG_DIR="/config/app/log"
JELLYFIN_CACHE_DIR="/config/app/cache"
```

You can override these locations by setting them to a different value with a docker environment variable.

## Hardware support

To make your hardware devices available inside the container use the following argument `--device=/dev/dri:/dev/dri` for Intel QuickSync and `--device=/dev/dvb:/dev/dvb` for a tuner. NVIDIA users should go visit the [NVIDIA github](https://github.com/NVIDIA/nvidia-docker) page for instructions. For Raspberry Pi OpenMAX you'll need to use `--device=/dev/vchiq:/dev/vchiq -v /opt/vc/lib:/opt/vc/lib`, V4L2 will need `--device=/dev/video10:/dev/video10 --device=/dev/video11:/dev/video11 --device=/dev/video12:/dev/video12` and MMAL needs `--device=/dev/vcsm:/dev/vcsm` or `--device=/dev/vc-mem:/dev/vc-mem`.
