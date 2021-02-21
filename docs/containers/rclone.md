<img src="https://hotio.dev/img/rclone.png" alt="logo" height="130" width="130">

[:material-github: GitHub](https://github.com/hotio/rclone){: .header-icons target=_blank }  
[:material-github: GitHub Registry](https://github.com/orgs/hotio/packages/container/package/rclone){: .header-icons target=_blank }  
[:material-docker: Docker Hub](https://hub.docker.com/r/hotio/rclone){: .header-icons target=_blank }  
[:material-link: Rclone](https://github.com/rclone/rclone){: .header-icons target=_blank }  

## Starting the container

=== "cli"

    ```shell
    docker run --rm hotio/rclone ...
    ```

The default `ENTRYPOINT` is `rclone`.

## Tags

--8<-- "tags/rclone.md"

## Using a rclone mount on the host

By setting the `bind-propagation` to `shared` on the volume `mountpoint`, like this `-v /data/mountpoint:/mountpoint:shared`, you are able to access the mount from the host. If you want to use this mount in another container, the best solution is to create a volume on the parent folder of that mount with `bind-propagation` set to `slave`. For example, `-v /data:/data:slave` (`/data` on the host, would contain the previously created volume `mountpoint`). Doing it like this will ensure that when the container creating the mount restarts, the other containers using that mount will recover and keep working.

## Extra docker privileges

In most cases you will need some or all of the following flags added to your command to get the required docker privileges when using `rclone mount`.

```shell
--security-opt apparmor:unconfined --cap-add SYS_ADMIN --device /dev/fuse
```
