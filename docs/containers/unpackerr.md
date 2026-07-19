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
<tr><td><div id="tag30094" onclick="CopyToClipboard('tag30094');return false;" class="tag-decoration">nightly</div><div id="tag20643" onclick="CopyToClipboard('tag20643');return false;" class="tag-decoration">nightly-6758962</div><div id="tag24751" onclick="CopyToClipboard('tag24751');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/675896294777895187be87ab7e2af0d25f921ea2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681052095" target="_blank">2026-07-19 09:08:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag764" onclick="CopyToClipboard('tag764');return false;" class="tag-decoration">release</div><div id="tag19501" onclick="CopyToClipboard('tag19501');return false;" class="tag-decoration">release-2e23d3d</div><div id="tag20989" onclick="CopyToClipboard('tag20989');return false;" class="tag-decoration">release-0.15.2</div><div id="tag8979" onclick="CopyToClipboard('tag8979');return false;" class="tag-decoration">release-v0</div><div id="tag17346" onclick="CopyToClipboard('tag17346');return false;" class="tag-decoration">release-v0.15</div><div id="tag19466" onclick="CopyToClipboard('tag19466');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2e23d3d1763507987fd843ddee5e1e921df7a6e5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29681051088" target="_blank">2026-07-19 09:08:28</a></td></tr>
<tr><td><div id="tag2548" onclick="CopyToClipboard('tag2548');return false;" class="tag-decoration">testing</div><div id="tag18693" onclick="CopyToClipboard('tag18693');return false;" class="tag-decoration">testing-4e7b916</div><div id="tag18589" onclick="CopyToClipboard('tag18589');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag6165" onclick="CopyToClipboard('tag6165');return false;" class="tag-decoration">testing-v0</div><div id="tag13971" onclick="CopyToClipboard('tag13971');return false;" class="tag-decoration">testing-v0.15</div><div id="tag20495" onclick="CopyToClipboard('tag20495');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/4e7b91668899f6d12358593b76fa8e1cfff1086c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/29356728686" target="_blank">2026-07-14 18:09:38</a></td></tr>
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
