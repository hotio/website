<div class="image-logo"><img src="/img/image-logos/rar2fs.svg" alt="logo"></div>

[:octicons-mark-github-16: GitHub](https://github.com/hotio/rar2fs){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-container-16: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/rar2fs){: .header-icons target=_blank rel="noopener noreferrer" }  
[:material-docker:{: style="transform: scale(1.3);" } Docker Hub](https://hub.docker.com/r/hotio/rar2fs){: .header-icons target=_blank rel="noopener noreferrer" }  
[:octicons-link-16: rar2fs](https://github.com/hasse69/rar2fs){: .header-icons target=_blank rel="noopener noreferrer" }  

--8<-- "includes/stats.md"

## Starting the container

!!! docker ""

    === "cli"

        ```shell
        docker run --rm cr.hotio.dev/hotio/rar2fs ...
        ```

The default `ENTRYPOINT` is `rar2fs -f -o auto_unmount`.

--8<-- "includes/tags.md"

## Using the rar2fs mount on the host

By setting the `bind-propagation` to `shared` on the volume `mountpoint`, like this `-v /data/mountpoint:/mountpoint:shared`, you are able to access the mount from the host. If you want to use this mount in another container, the best solution is to create a volume on the parent folder of that mount with `bind-propagation` set to `slave`. For example, `-v /data:/data:slave` (`/data` on the host, would contain the previously created volume `mountpoint`). Doing it like this will ensure that when the container creating the mount restarts, the other containers using that mount will recover and keep working.

## Extra docker privileges

In most cases you will need some or all of the following flags added to your command to get the required docker privileges when using a rar2fs mount.

```shell
--security-opt apparmor:unconfined --cap-add SYS_ADMIN --device /dev/fuse
```
