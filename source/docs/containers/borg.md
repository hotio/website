[<img src="https://hotio.dev/img/borg.png" alt="logo" height="130" width="130">](https://github.com/borgbackup/borg)

[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white)](https://github.com/docker-hotio/docker-borg)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white)](https://github.com/users/hotio/packages/container/package/borg)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/borg?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white)](https://hub.docker.com/r/hotio/borg)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square)](https://github.com/borgbackup/borg)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square)](https://hotio.dev/containers/borg)

## Starting the container

Just the basics to get the container running:

```shell
docker run --rm hotio/borg ...
```

The default `ENTRYPOINT` is `borg`.

## Tags

| Tag                | Upstream            | Version |
| -------------------|---------------------|---------|
| `release` (latest) | GitHub releases     | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fdocker-hotio%2Fdocker-borg%2Frelease%2FVERSION.json) |
| `testing`          | GitHub pre-releases | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fdocker-hotio%2Fdocker-borg%2Ftesting%2FVERSION.json) |

You can also find tags that reference a commit or version number.
