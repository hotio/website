---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29088" onclick="CopyToClipboard('tag29088');return false;" class="tag-decoration">nightly</div><div id="tag19569" onclick="CopyToClipboard('tag19569');return false;" class="tag-decoration">nightly-2ac97f7</div><div id="tag5821" onclick="CopyToClipboard('tag5821');return false;" class="tag-decoration">nightly-0.24.4.65534-17bbfce9</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/2ac97f736b3933a586cedb9bca6020e965351df4" target="_blank">Version update: 0.24.3.65534+183645f2 => 0.24.4.65534+17bbfce9</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22077031438" target="_blank">2026-02-16 20:45:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13655" onclick="CopyToClipboard('tag13655');return false;" class="tag-decoration">release</div><div id="tag27232" onclick="CopyToClipboard('tag27232');return false;" class="tag-decoration">release-c93d68e</div><div id="tag32369" onclick="CopyToClipboard('tag32369');return false;" class="tag-decoration">release-0.24.4</div><div id="tag4472" onclick="CopyToClipboard('tag4472');return false;" class="tag-decoration">release-v0</div><div id="tag14911" onclick="CopyToClipboard('tag14911');return false;" class="tag-decoration">release-v0.24</div><div id="tag14101" onclick="CopyToClipboard('tag14101');return false;" class="tag-decoration">release-v0.24.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/c93d68ef5fcb931d65cca792031a1e7e0a008a77" target="_blank">Version update: 0.24.3 => 0.24.4</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22071560254" target="_blank">2026-02-16 17:04:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
