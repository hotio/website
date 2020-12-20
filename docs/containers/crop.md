[![GitHub Source](https://img.shields.io/badge/github-source-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/hotio/crop)
[![GitHub Registry](https://img.shields.io/badge/github-registry-ffb64c?style=flat-square&logo=github&logoColor=white&labelColor=757575)](https://github.com/orgs/hotio/packages/container/package/crop)
[![Docker Pulls](https://img.shields.io/docker/pulls/hotio/crop?color=ffb64c&style=flat-square&label=pulls&logo=docker&logoColor=white&labelColor=757575)](https://hub.docker.com/r/hotio/crop)
[![Discord](https://img.shields.io/discord/610068305893523457?style=flat-square&color=ffb64c&label=discord&logo=discord&logoColor=white&labelColor=757575)](https://hotio.dev/discord)
[![Upstream](https://img.shields.io/badge/upstream-project-ffb64c?style=flat-square&labelColor=757575)](https://github.com/l3uddz/crop)
[![Website](https://img.shields.io/badge/website-hotio.dev-ffb64c?style=flat-square&labelColor=757575)](https://hotio.dev/containers/crop)

## Starting the container

Just the basics to get the container running:

```shell
docker run --rm hotio/crop ...
```

The default `ENTRYPOINT` is `crop`.

## Tags

| Tag                | Description                    | Version | Build |
| -------------------|--------------------------------|---------|-------|
| `release` (latest) | GitHub releases                | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fcrop%2Frelease%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/crop/build/release?style=flat-square&label=) |
| `nightly`          | Every commit to develop branch | ![version](https://img.shields.io/badge/dynamic/json?color=f5f5f5&style=flat-square&label=&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhotio%2Fcrop%2Fnightly%2FVERSION.json) | ![build](https://img.shields.io/github/workflow/status/hotio/crop/build/nightly?style=flat-square&label=) |

You can also find tags that reference a commit or version number.
