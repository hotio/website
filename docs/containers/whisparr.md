---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10008" onclick="CopyToClipboard('tag10008');return false;" class="tag-decoration">v2</div><div id="tag7107" onclick="CopyToClipboard('tag7107');return false;" class="tag-decoration">v2-6ea229b</div><div id="tag3140" onclick="CopyToClipboard('tag3140');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag31403" onclick="CopyToClipboard('tag31403');return false;" class="tag-decoration">v2-v2</div><div id="tag25383" onclick="CopyToClipboard('tag25383');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3432" onclick="CopyToClipboard('tag3432');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6ea229b3d66042bb935b7d2ce6961ebbaeb0228b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138533454" target="_blank">2026-10-18 15:00:38</a></td></tr>
<tr><td><div id="tag14407" onclick="CopyToClipboard('tag14407');return false;" class="tag-decoration">v2-develop</div><div id="tag11201" onclick="CopyToClipboard('tag11201');return false;" class="tag-decoration">v2-develop-b89797f</div><div id="tag24089" onclick="CopyToClipboard('tag24089');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag14127" onclick="CopyToClipboard('tag14127');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5788" onclick="CopyToClipboard('tag5788');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag10316" onclick="CopyToClipboard('tag10316');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b89797f2fd0d5e72962dd0f3a5ed7e01a665ceb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532890" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag25238" onclick="CopyToClipboard('tag25238');return false;" class="tag-decoration">v3</div><div id="tag31059" onclick="CopyToClipboard('tag31059');return false;" class="tag-decoration">v3-a7f0a98</div><div id="tag31958" onclick="CopyToClipboard('tag31958');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag19877" onclick="CopyToClipboard('tag19877');return false;" class="tag-decoration">v3-v3</div><div id="tag17406" onclick="CopyToClipboard('tag17406');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28169" onclick="CopyToClipboard('tag28169');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a7f0a98427570f2ec9f60bb5d39faa2d90dca661" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39485642312" target="_blank">2026-10-20 19:41:45</a></td></tr>
<tr><td><div id="tag10980" onclick="CopyToClipboard('tag10980');return false;" class="tag-decoration">v3-develop</div><div id="tag19507" onclick="CopyToClipboard('tag19507');return false;" class="tag-decoration">v3-develop-e05e295</div><div id="tag32488" onclick="CopyToClipboard('tag32488');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag29921" onclick="CopyToClipboard('tag29921');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28307" onclick="CopyToClipboard('tag28307');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag6331" onclick="CopyToClipboard('tag6331');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e05e295f196f81dc289cd48b1b990244112322f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138538602" target="_blank">2026-10-18 15:00:42</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
