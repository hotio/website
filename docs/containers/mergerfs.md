---
hide:
  - toc
title: hotio/mergerfs
---

--8<-- "includes/header-links.md"

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
    </tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-11.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --init \
        -v /<host_folder_branch_1>:/branch_1 \
        -v /<host_folder_branch_2>:/branch_2 \
        -v /<host_folder_mountpoint>:/mountpoint:shared \
        --cap-add SYS_ADMIN \
        --device /dev/fuse \
        ghcr.io/hotio/mergerfs -o allow_other /branch_1:/branch_2 /mountpoint
    ```

The default `ENTRYPOINT` is `mergerfs -f`.

## Using the mergerfs mount on the host

By setting the `bind-propagation` to `shared` on the volume `mountpoint`, like this `-v /data/mountpoint:/mountpoint:shared`, you are able to access the mount from the host. If you want to use this mount in another container, the best solution is to create a volume on the parent folder of that mount with `bind-propagation` set to `slave`. For example, `-v /data:/data:slave` (`/data` on the host, would contain the previously created volume `mountpoint`). Doing it like this will ensure that when the container creating the mount restarts, the other containers using that mount will recover and keep working.

## Extra docker privileges

On some systems you'll also need the following privileges.

```shell
--security-opt apparmor:unconfined
```
