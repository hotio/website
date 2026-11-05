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
<tr><td><div id="tag21553" onclick="CopyToClipboard('tag21553');return false;" class="tag-decoration">nightly</div><div id="tag3757" onclick="CopyToClipboard('tag3757');return false;" class="tag-decoration">nightly-e5b4c10</div><div id="tag26538" onclick="CopyToClipboard('tag26538');return false;" class="tag-decoration">nightly-886adac27597b45cd901099cd02a0b46d9d3cb7f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/e5b4c10eab628f8ea1ecdf61343068dc01a900a6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42085770157" target="_blank">2026-11-05 18:35:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26498" onclick="CopyToClipboard('tag26498');return false;" class="tag-decoration">release</div><div id="tag29214" onclick="CopyToClipboard('tag29214');return false;" class="tag-decoration">release-1135f40</div><div id="tag7716" onclick="CopyToClipboard('tag7716');return false;" class="tag-decoration">release-3.5.1</div><div id="tag22124" onclick="CopyToClipboard('tag22124');return false;" class="tag-decoration">release-v3</div><div id="tag11790" onclick="CopyToClipboard('tag11790');return false;" class="tag-decoration">release-v3.5</div><div id="tag23824" onclick="CopyToClipboard('tag23824');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/1135f40bf61f9a0fc365262700ab25acaac6cdfa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42085776085" target="_blank">2026-11-05 18:35:54</a></td></tr>
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
