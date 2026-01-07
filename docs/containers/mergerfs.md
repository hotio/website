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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9727" onclick="CopyToClipboard('tag9727');return false;" class="tag-decoration">release</div><div id="tag21577" onclick="CopyToClipboard('tag21577');return false;" class="tag-decoration">release-2.41.1</div><div id="tag9032" onclick="CopyToClipboard('tag9032');return false;" class="tag-decoration">release-22314e1</div><div id="tag11352" onclick="CopyToClipboard('tag11352');return false;" class="tag-decoration">release-v2</div><div id="tag21538" onclick="CopyToClipboard('tag21538');return false;" class="tag-decoration">release-v2.41</div><div id="tag22174" onclick="CopyToClipboard('tag22174');return false;" class="tag-decoration">release-v2.41.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/mergerfs/commit/22314e1c05d4576b7c1257553dd9d363ce846711" target="_blank"></a></td><td><a href="https://github.com/hotio/mergerfs/actions/runs/20691128205" target="_blank">2025-12-20 07:15:59</a></td></tr>
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
