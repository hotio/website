---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1745" onclick="CopyToClipboard('tag1745');return false;" class="tag-decoration">nightly</div><div id="tag12562" onclick="CopyToClipboard('tag12562');return false;" class="tag-decoration">nightly-f91a26befeb4d676a81e9be467510a002c628041</div><div id="tag20265" onclick="CopyToClipboard('tag20265');return false;" class="tag-decoration">nightly-96c58f8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/96c58f8000288991c584abd36aec6f7cac43c542" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20770107900" target="_blank">2026-01-07 03:57:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24142" onclick="CopyToClipboard('tag24142');return false;" class="tag-decoration">release</div><div id="tag3289" onclick="CopyToClipboard('tag3289');return false;" class="tag-decoration">release-2.7.3</div><div id="tag14586" onclick="CopyToClipboard('tag14586');return false;" class="tag-decoration">release-76e4457</div><div id="tag15845" onclick="CopyToClipboard('tag15845');return false;" class="tag-decoration">release-v2</div><div id="tag1028" onclick="CopyToClipboard('tag1028');return false;" class="tag-decoration">release-v2.7</div><div id="tag653" onclick="CopyToClipboard('tag653');return false;" class="tag-decoration">release-v2.7.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/76e44576cdc075d3d174f2ddfa9bd4ef576b4149" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/20770108101" target="_blank">2026-01-07 03:57:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name seerr \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
