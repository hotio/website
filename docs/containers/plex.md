---
hide:
  - toc
---

<div class="image-logo"><img src="/img/image-logos/plex.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/plex){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/plex){: .header-icons target=_blank rel="noopener noreferrer" }
 / [:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/plex){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: Plex](https://www.plex.tv){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

!!! warning
    Don't file a support request for the error message in the Plex log `Critical: libusb_init failed`, it's not critical, ignore it.

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm \
            --name plex \
            -p 32400:32400 \
            -e PUID=1000 \
            -e PGID=1000 \
            -e UMASK=002 \
            -e TZ="Etc/UTC" \
            -e PLEX_CLAIM="" \
            -e ADVERTISE_IP="" \
            -e ALLOWED_NETWORKS="" \
            -e PLEX_PASS="no" \
            -v /<host_folder_config>:/config \
            -v /<host_folder_transcode>:/transcode \
            ghcr.io/hotio/plex
        ```

    === "compose"

        ```yaml
        version: "3.7"

        services:
          plex:
            container_name: plex
            image: ghcr.io/hotio/plex
            ports:
              - "32400:32400"
            environment:
              - PUID=1000
              - PGID=1000
              - UMASK=002
              - TZ=Etc/UTC
              - PLEX_CLAIM
              - ADVERTISE_IP
              - ALLOWED_NETWORKS
              - PLEX_PASS=no
            volumes:
              - /<host_folder_config>:/config
              - /<host_folder_transcode>:/transcode
        ```

In most cases you'll need to add additional volumes, depending on your own personal preference, to get access to your files.

--8<-- "includes/tags.md"

## Volumes

By default the container has 2 volumes defined, the volume `/config` that contains the configuration files and the volume `/transcode` which is used as the default transcode directory.

## Claim your server

Go to [plex.tv/claim](https://www.plex.tv/claim){: target=_blank rel="noopener noreferrer" } and login with your account, copy the claim code and add it to the environment variable like this `-e PLEX_CLAIM="claim-xxxxxxxxxxxxxxxxxxxx"`. When starting the new plex server for the first time, the server will be added to your account.

## Plex Pass

If you are a Plex Pass subscriber, you can enable the install of beta builds with `-e PLEX_PASS="yes"`. When the container starts, a version check is done for the latest beta and installed if a newer version is found.

## Environment variables ADVERTISE_IP and ALLOWED_NETWORKS

The variables correspond to the below plex network settings.

![Plex settings](/img/plex_settings.png "Plex settings")

The variable `ADVERTISE_IP` is useful to aid your local clients in discovering your plex server when running in the `bridge` network mode. Most likely you would use something like `http://192.168.0.10:32400`. You could use `ALLOWED_NETWORKS` when you're locked out and need to regain access without providing credentials.

## TOP secret stuff

If you do `-e PLEX_PASS="https://..."`, stuff happens for which no support will be given.

## Hardware support

To make your hardware devices available inside the container use the following argument `--device=/dev/dri:/dev/dri` for Intel QuickSync and `--device=/dev/dvb:/dev/dvb` for a tuner. NVIDIA users should go visit the [NVIDIA github](https://github.com/NVIDIA/nvidia-docker){: target=_blank rel="noopener noreferrer" } page for instructions.
