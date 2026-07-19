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
<tr><td><div id="tag629" onclick="CopyToClipboard('tag629');return false;" class="tag-decoration">nightly</div><div id="tag15100" onclick="CopyToClipboard('tag15100');return false;" class="tag-decoration">nightly-6e3d4b2</div><div id="tag6427" onclick="CopyToClipboard('tag6427');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/6e3d4b290b6ff8bf77cad759483a61ef975c955d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356733291" target="_blank">2026-07-14 18:09:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22476" onclick="CopyToClipboard('tag22476');return false;" class="tag-decoration">release</div><div id="tag22618" onclick="CopyToClipboard('tag22618');return false;" class="tag-decoration">release-2e23d3d</div><div id="tag22326" onclick="CopyToClipboard('tag22326');return false;" class="tag-decoration">release-0.15.2</div><div id="tag14929" onclick="CopyToClipboard('tag14929');return false;" class="tag-decoration">release-v0</div><div id="tag14981" onclick="CopyToClipboard('tag14981');return false;" class="tag-decoration">release-v0.15</div><div id="tag16760" onclick="CopyToClipboard('tag16760');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2e23d3d1763507987fd843ddee5e1e921df7a6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681051088" target="_blank">2026-07-19 09:08:28</a></td></tr>
<tr><td><div id="tag30915" onclick="CopyToClipboard('tag30915');return false;" class="tag-decoration">testing</div><div id="tag8508" onclick="CopyToClipboard('tag8508');return false;" class="tag-decoration">testing-4e7b916</div><div id="tag15581" onclick="CopyToClipboard('tag15581');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag22362" onclick="CopyToClipboard('tag22362');return false;" class="tag-decoration">testing-v0</div><div id="tag11227" onclick="CopyToClipboard('tag11227');return false;" class="tag-decoration">testing-v0.15</div><div id="tag14797" onclick="CopyToClipboard('tag14797');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4e7b91668899f6d12358593b76fa8e1cfff1086c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356728686" target="_blank">2026-07-14 18:09:38</a></td></tr>
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
