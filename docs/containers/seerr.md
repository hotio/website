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
<tr><td><div id="tag17945" onclick="CopyToClipboard('tag17945');return false;" class="tag-decoration">nightly</div><div id="tag3137" onclick="CopyToClipboard('tag3137');return false;" class="tag-decoration">nightly-6f78a8b</div><div id="tag31903" onclick="CopyToClipboard('tag31903');return false;" class="tag-decoration">nightly-886adac27597b45cd901099cd02a0b46d9d3cb7f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/6f78a8be3aa16184ea882a74db47870cac8a60be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/41913190974" target="_blank">2026-11-04 21:08:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29394" onclick="CopyToClipboard('tag29394');return false;" class="tag-decoration">release</div><div id="tag6238" onclick="CopyToClipboard('tag6238');return false;" class="tag-decoration">release-1135f40</div><div id="tag28494" onclick="CopyToClipboard('tag28494');return false;" class="tag-decoration">release-3.5.1</div><div id="tag13844" onclick="CopyToClipboard('tag13844');return false;" class="tag-decoration">release-v3</div><div id="tag29581" onclick="CopyToClipboard('tag29581');return false;" class="tag-decoration">release-v3.5</div><div id="tag9420" onclick="CopyToClipboard('tag9420');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/1135f40bf61f9a0fc365262700ab25acaac6cdfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42085776085" target="_blank">2026-11-05 18:35:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
