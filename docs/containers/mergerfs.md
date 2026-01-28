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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21170" onclick="CopyToClipboard('tag21170');return false;" class="tag-decoration">release</div><div id="tag14028" onclick="CopyToClipboard('tag14028');return false;" class="tag-decoration">release-ea9e99c</div><div id="tag27127" onclick="CopyToClipboard('tag27127');return false;" class="tag-decoration">release-2.41.1</div><div id="tag12841" onclick="CopyToClipboard('tag12841');return false;" class="tag-decoration">release-v2</div><div id="tag12304" onclick="CopyToClipboard('tag12304');return false;" class="tag-decoration">release-v2.41</div><div id="tag3947" onclick="CopyToClipboard('tag3947');return false;" class="tag-decoration">release-v2.41.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/mergerfs/commit/ea9e99cc931e95d1ce78bcb2fbeca09344133461" target="_blank">Upstream digest update</a></td><td><a href="https://github.com/hotio/mergerfs/actions/runs/21425265559" target="_blank">2026-01-28 04:39:15</a></td></tr>
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
