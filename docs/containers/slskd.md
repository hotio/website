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
<tr><td><div id="tag29622" onclick="CopyToClipboard('tag29622');return false;" class="tag-decoration">nightly</div><div id="tag11028" onclick="CopyToClipboard('tag11028');return false;" class="tag-decoration">nightly-8c588dd</div><div id="tag4734" onclick="CopyToClipboard('tag4734');return false;" class="tag-decoration">nightly-0.25.1.65534-3edca316</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/8c588dd80ea9571df9d59fea3f83c5faad37d169" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/27916902221" target="_blank">2026-06-21 20:43:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7630" onclick="CopyToClipboard('tag7630');return false;" class="tag-decoration">release</div><div id="tag1126" onclick="CopyToClipboard('tag1126');return false;" class="tag-decoration">release-7ebd5f9</div><div id="tag6096" onclick="CopyToClipboard('tag6096');return false;" class="tag-decoration">release-0.25.1</div><div id="tag29863" onclick="CopyToClipboard('tag29863');return false;" class="tag-decoration">release-v0</div><div id="tag15944" onclick="CopyToClipboard('tag15944');return false;" class="tag-decoration">release-v0.25</div><div id="tag25489" onclick="CopyToClipboard('tag25489');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/7ebd5f971af5e2303d7f9c4d0165f325c2e5fa85" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/27873908111" target="_blank">2026-06-20 14:22:48</a></td></tr>
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
