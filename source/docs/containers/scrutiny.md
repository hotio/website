[<img src="https://hotio.dev/img/scrutiny.png" alt="logo" height="130" width="130">](https://hotio.dev/img/scrutiny.png)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white)](https://github.com/docker-hotio/docker-scrutiny)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white)](https://github.com/users/hotio/packages/container/package/scrutiny)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/scrutiny?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white)](https://hub.docker.com/r/hotio/scrutiny)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square)](https://github.com/analogj/scrutiny)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square)](https://hotio.dev/containers/scrutiny)

## Starting the container

Just the basics to get the container running:

```shell hl_lines="4 5 6 7 8 9 10 11 12"
docker run --rm \
    --name scrutiny \
    -p 8080:8080 \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=002 \
    -e TZ="Etc/UTC" \
    -e ARGS="" \
    -e DEBUG="no" \
    -e INTERVAL=86400 \
    -e API_ENDPOINT="http://localhost:8080" \
    -e MODE="both" \
    --cap-add SYS_RAWIO \
    --device /dev/sda \
    -v /run/udev:/run/udev:ro \
    -v /<host_folder_config>:/config \
    hotio/scrutiny
```

The [highlighted](https://hotio.dev/containers/scrutiny) variables are all optional, the values you see are the defaults.

For the environment variable `MODE` you can pick the values `both`, `web` or `collector` to enable the desired operating mode (see below). The `INTERVAL` variable defines the amount of time in seconds between collector runs, the metrics are pushed to the webinterface located at `API_ENDPOINT`. When passing through NVMe devices you'll probably have to use `--cap-add SYS_ADMIN` instead of `--cap-add SYS_RAWIO`.

## Deploying as 2 seperate containers

```shell
docker run --rm \
    --name scrutiny-collector \
    --network my-net \
    -e INTERVAL=3600 \
    -e API_ENDPOINT="http://scrutiny-web:8080" \
    -e MODE="collector" \
    --cap-add SYS_RAWIO \
    --device /dev/sda \
    -v /run/udev:/run/udev:ro \
    -v /<host_folder_config>:/config \
    hotio/scrutiny
```

```shell
docker run --rm \
    --name scrutiny-web \
    --network my-net \
    -p 8080:8080 \
    -e MODE="web" \
    -v /<host_folder_config>:/config \
    hotio/scrutiny
```

## Tags

| Tag                | Upstream                      |
| -------------------|-------------------------------|
| `release` (latest) | GitHub releases               |
| `nightly`          | Every commit to master branch |

You can also find tags that reference a commit or version number.

## Configuration location

Your scrutiny configuration inside the container is stored in `/config/app`, to migrate from another container, you'd probably have to move your files from `/config` to `/config/app`.

## Executing your own scripts

If you have a need to do additional stuff when the container starts or stops, you can mount your script with `-v /docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `-v /docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

```shell
#!/usr/bin/with-contenv bash

echo "Hello, this is me, your script."
```

## Troubleshooting a problem

By default all output is redirected to `/dev/null`, so you won't see anything from the application when using `docker logs`. Most applications write everything to a log file too. If you do want to see this output with `docker logs`, you can use `-e DEBUG="yes"` to enable this.
