[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/movearr)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/movearr)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/movearr?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/movearr)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/l3uddz/movearr)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/movearr)

## Starting the container

CLI:

```shell
docker run --rm hotio/movearr ...
```

The default `ENTRYPOINT` is `movearr`.

## Tags

| Tag                | Upstream                      | Version | Build |
| -------------------|-------------------------------|---------|-------|
| `release` (latest) | GitHub releases               | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fmovearr%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/movearr/build/release?style=flat-square&label=) |
| `nightly`          | Every commit to master branch | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fmovearr%2Fnightly%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/movearr/build/nightly?style=flat-square&label=) |

You can also find tags that reference a commit or version number.
