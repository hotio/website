---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16591" onclick="CopyToClipboard('tag16591');return false;" class="tag-decoration">nightly</div><div id="tag15053" onclick="CopyToClipboard('tag15053');return false;" class="tag-decoration">nightly-25238b0</div><div id="tag1954" onclick="CopyToClipboard('tag1954');return false;" class="tag-decoration">nightly-6.1.1.10317</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/25238b035f9adddff57b95cf6ac8ee897d04372b" target="_blank">Version update: 6.1.1.10317 => 6.1.1.10317</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20950118757" target="_blank">2026-01-13 08:37:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9198" onclick="CopyToClipboard('tag9198');return false;" class="tag-decoration">release</div><div id="tag22167" onclick="CopyToClipboard('tag22167');return false;" class="tag-decoration">release-6bfdadd</div><div id="tag16469" onclick="CopyToClipboard('tag16469');return false;" class="tag-decoration">release-6.0.4.10291</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/6bfdadd421b31214316a46ead12b2f00cf933aca" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/21059653664" target="_blank">2026-01-16 07:55:34</a></td></tr>
<tr><td><div id="tag25876" onclick="CopyToClipboard('tag25876');return false;" class="tag-decoration">testing</div><div id="tag3240" onclick="CopyToClipboard('tag3240');return false;" class="tag-decoration">testing-801f460</div><div id="tag28093" onclick="CopyToClipboard('tag28093');return false;" class="tag-decoration">testing-6.1.1.10317</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/801f460720a915b2ee309f9065a5f26f6b7c3ec0" target="_blank">Version update: 6.1.1.10317 => 6.1.1.10317</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20950119994" target="_blank">2026-01-13 08:37:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
