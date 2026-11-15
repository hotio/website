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
<tr><td><div id="tag14507" onclick="CopyToClipboard('tag14507');return false;" class="tag-decoration">nightly</div><div id="tag3784" onclick="CopyToClipboard('tag3784');return false;" class="tag-decoration">nightly-9d6c826</div><div id="tag23647" onclick="CopyToClipboard('tag23647');return false;" class="tag-decoration">nightly-0.26.2.65534-a9a12166</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/9d6c826406e2791c710470fdf0599b6e07226163" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/43668127312" target="_blank">2026-11-15 02:30:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2497" onclick="CopyToClipboard('tag2497');return false;" class="tag-decoration">release</div><div id="tag24253" onclick="CopyToClipboard('tag24253');return false;" class="tag-decoration">release-7d6659e</div><div id="tag20887" onclick="CopyToClipboard('tag20887');return false;" class="tag-decoration">release-0.26.2</div><div id="tag27577" onclick="CopyToClipboard('tag27577');return false;" class="tag-decoration">release-v0</div><div id="tag23283" onclick="CopyToClipboard('tag23283');return false;" class="tag-decoration">release-v0.26</div><div id="tag3852" onclick="CopyToClipboard('tag3852');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/7d6659efe36489ed86c977a5d5427e02662eb4d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42308580170" target="_blank">2026-11-06 22:58:09</a></td></tr>
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
