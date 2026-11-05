---
hide:
  - toc
title: hotio/slskd
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
<tr><td><div id="tag9374" onclick="CopyToClipboard('tag9374');return false;" class="tag-decoration">nightly</div><div id="tag9981" onclick="CopyToClipboard('tag9981');return false;" class="tag-decoration">nightly-b6b6355</div><div id="tag12838" onclick="CopyToClipboard('tag12838');return false;" class="tag-decoration">nightly-0.26.2.65534-2b827344</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/b6b6355443ff6658ee3316bb40458a1984c7f45a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42116756261" target="_blank">2026-11-05 21:53:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16078" onclick="CopyToClipboard('tag16078');return false;" class="tag-decoration">release</div><div id="tag31370" onclick="CopyToClipboard('tag31370');return false;" class="tag-decoration">release-0f4d461</div><div id="tag5799" onclick="CopyToClipboard('tag5799');return false;" class="tag-decoration">release-0.26.2</div><div id="tag29370" onclick="CopyToClipboard('tag29370');return false;" class="tag-decoration">release-v0</div><div id="tag8122" onclick="CopyToClipboard('tag8122');return false;" class="tag-decoration">release-v0.26</div><div id="tag13067" onclick="CopyToClipboard('tag13067');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/0f4d4614c207963c156490abd6e9e7fe39ec8375" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42116756972" target="_blank">2026-11-05 21:53:49</a></td></tr>
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
