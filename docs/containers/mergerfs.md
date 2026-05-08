---
hide:
  - toc
title: hotio/mergerfs
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/mergerfs){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/mergerfs){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/trapexit/mergerfs){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1338" onclick="CopyToClipboard('tag1338');return false;" class="tag-decoration">release</div><div id="tag11643" onclick="CopyToClipboard('tag11643');return false;" class="tag-decoration">release-f841825</div><div id="tag24087" onclick="CopyToClipboard('tag24087');return false;" class="tag-decoration">release-2.42.0</div><div id="tag9864" onclick="CopyToClipboard('tag9864');return false;" class="tag-decoration">release-v2</div><div id="tag25821" onclick="CopyToClipboard('tag25821');return false;" class="tag-decoration">release-v2.42</div><div id="tag6241" onclick="CopyToClipboard('tag6241');return false;" class="tag-decoration">release-v2.42.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/mergerfs/commit/f84182576f9914b66c8199310e27547436643d3b" target="_blank">Version update: 2.41.1 => 2.42.0</a></td><td><a href="https://github.com/hotio/mergerfs/actions/runs/25566500676" target="_blank">2026-05-08 16:18:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --init \
        -v /<host_folder_branch_1>:/branch_1 \
        -v /<host_folder_branch_2>:/branch_2 \
        -v /<host_folder_mountpoint>:/mountpoint:shared \
        --cap-add="SYS_ADMIN" \
        --device="/dev/fuse" \
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
