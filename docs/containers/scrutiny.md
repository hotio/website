[<img src="https://hotio.dev/img/scrutiny.png" alt="logo" height="130" width="130">](https://hotio.dev/img/scrutiny.png)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/scrutiny)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/scrutiny)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/scrutiny?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/scrutiny)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/analogj/scrutiny)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/scrutiny)

## Starting the container

=== "cli"

    ```shell
    docker run --rm \
        --name scrutiny \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e INTERVAL=86400 \
        -e API_ENDPOINT="http://localhost:8080" \
        -e MODE="both" \
        -v /<host_folder_config>:/config \
        -v /run/udev:/run/udev:ro \
        --cap-add SYS_RAWIO \
        --device /dev/sda \
        hotio/scrutiny
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      scrutiny:
        container_name: scrutiny
        image: hotio/scrutiny
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - INTERVAL=86400
          - API_ENDPOINT=http://localhost:8080
          - MODE=both
        volumes:
          - /<host_folder_config>:/config
          - /run/udev:/run/udev:ro
        cap_add:
          - SYS_RAWIO
        devices:
          - /dev/sda
    ```

For the environment variable `MODE` you can pick the values `both`, `web` or `collector` to enable the desired operating mode (see below). The `INTERVAL` variable defines the amount of time in seconds between collector runs, the metrics are pushed to the webinterface located at `API_ENDPOINT`. When passing through NVMe devices you'll probably have to use `--cap-add SYS_ADMIN` instead of `--cap-add SYS_RAWIO`.

## Tags

--8<-- "tags/scrutiny.md"

## Deploying as 2 seperate containers

=== "cli"

    ```shell
    docker run --rm \
        --name scrutiny-collector \
        --network my-net \
        -e INTERVAL=3600 \
        -e API_ENDPOINT="http://scrutiny-web:8080" \
        -e MODE="collector" \
        -v /<host_folder_config>:/config \
        -v /run/udev:/run/udev:ro \
        --cap-add SYS_RAWIO \
        --device /dev/sda \
        hotio/scrutiny

    docker run --rm \
        --name scrutiny-web \
        --network my-net \
        -p 8080:8080 \
        -e MODE="web" \
        -v /<host_folder_config>:/config \
        hotio/scrutiny
    ```

=== "compose"

    ```yaml
    version: "3.7"

    services:
      scrutiny-collector:
        container_name: scrutiny-collector
        image: hotio/scrutiny
        environment:
          - INTERVAL=3600
          - API_ENDPOINT=http://scrutiny-web:8080
          - MODE=collector
        volumes:
          - /<host_folder_config>:/config
          - /run/udev:/run/udev:ro
        cap_add:
          - SYS_RAWIO
        devices:
          - /dev/sda

      scrutiny-web:
        container_name: scrutiny-web
        image: hotio/scrutiny
        ports:
          - "8080:8080"
        environment:
          - MODE=web
        volumes:
          - /<host_folder_config>:/config
    ```
