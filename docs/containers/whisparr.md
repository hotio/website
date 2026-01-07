---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32614" onclick="CopyToClipboard('tag32614');return false;" class="tag-decoration">nightly</div><div id="tag25825" onclick="CopyToClipboard('tag25825');return false;" class="tag-decoration">nightly-2.0.0.1953</div><div id="tag27341" onclick="CopyToClipboard('tag27341');return false;" class="tag-decoration">nightly-6897a80</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/6897a805b433df7d1ec7ef4cf44076cf22b82a27" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20770111438" target="_blank">2026-01-07 03:58:07</a></td></tr>
<tr><td><div id="tag20414" onclick="CopyToClipboard('tag20414');return false;" class="tag-decoration">v3</div><div id="tag15772" onclick="CopyToClipboard('tag15772');return false;" class="tag-decoration">v3-3.1.0.2060</div><div id="tag14343" onclick="CopyToClipboard('tag14343');return false;" class="tag-decoration">v3-615b266</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/615b2663a8f88678bb684bbd03efb767cb98978a" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20770111830" target="_blank">2026-01-07 03:58:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name whisparr \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
