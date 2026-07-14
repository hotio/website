---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13056" onclick="CopyToClipboard('tag13056');return false;" class="tag-decoration">nightly</div><div id="tag19611" onclick="CopyToClipboard('tag19611');return false;" class="tag-decoration">nightly-9366cf0</div><div id="tag28623" onclick="CopyToClipboard('tag28623');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/9366cf05402bb103dc684bddbf6be6b60d815c40" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29320670861" target="_blank">2026-07-14 09:09:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32349" onclick="CopyToClipboard('tag32349');return false;" class="tag-decoration">release</div><div id="tag13802" onclick="CopyToClipboard('tag13802');return false;" class="tag-decoration">release-a4f669d</div><div id="tag21809" onclick="CopyToClipboard('tag21809');return false;" class="tag-decoration">release-0.15.2</div><div id="tag12904" onclick="CopyToClipboard('tag12904');return false;" class="tag-decoration">release-v0</div><div id="tag7001" onclick="CopyToClipboard('tag7001');return false;" class="tag-decoration">release-v0.15</div><div id="tag2562" onclick="CopyToClipboard('tag2562');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/a4f669d7500080c2d7b0c6035910806e8796b69e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29320674854" target="_blank">2026-07-14 09:09:29</a></td></tr>
<tr><td><div id="tag28988" onclick="CopyToClipboard('tag28988');return false;" class="tag-decoration">testing</div><div id="tag747" onclick="CopyToClipboard('tag747');return false;" class="tag-decoration">testing-0f751e3</div><div id="tag28888" onclick="CopyToClipboard('tag28888');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag25961" onclick="CopyToClipboard('tag25961');return false;" class="tag-decoration">testing-v0</div><div id="tag25529" onclick="CopyToClipboard('tag25529');return false;" class="tag-decoration">testing-v0.15</div><div id="tag2935" onclick="CopyToClipboard('tag2935');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0f751e3b673c3bac0ac19a1439a49f94f837587c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29320672647" target="_blank">2026-07-14 09:09:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
