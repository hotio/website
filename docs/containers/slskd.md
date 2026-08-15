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
<tr><td><div id="tag18602" onclick="CopyToClipboard('tag18602');return false;" class="tag-decoration">nightly</div><div id="tag20507" onclick="CopyToClipboard('tag20507');return false;" class="tag-decoration">nightly-a6e72be</div><div id="tag24823" onclick="CopyToClipboard('tag24823');return false;" class="tag-decoration">nightly-0.26.0.65534-c80e3f45</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/a6e72be4aa943ffa43861ed7b51e8125370e3201" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/31874936259" target="_blank">2026-08-15 08:37:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15558" onclick="CopyToClipboard('tag15558');return false;" class="tag-decoration">release</div><div id="tag7668" onclick="CopyToClipboard('tag7668');return false;" class="tag-decoration">release-4086da5</div><div id="tag23313" onclick="CopyToClipboard('tag23313');return false;" class="tag-decoration">release-0.26.0</div><div id="tag18663" onclick="CopyToClipboard('tag18663');return false;" class="tag-decoration">release-v0</div><div id="tag27562" onclick="CopyToClipboard('tag27562');return false;" class="tag-decoration">release-v0.26</div><div id="tag7952" onclick="CopyToClipboard('tag7952');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/4086da54d7638ce5c6d2b358c2c46fe807a31879" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/30373450392" target="_blank">2026-07-28 15:27:17</a></td></tr>
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
