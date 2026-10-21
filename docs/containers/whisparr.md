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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14887" onclick="CopyToClipboard('tag14887');return false;" class="tag-decoration">v2</div><div id="tag20415" onclick="CopyToClipboard('tag20415');return false;" class="tag-decoration">v2-e4c1492</div><div id="tag13181" onclick="CopyToClipboard('tag13181');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag1221" onclick="CopyToClipboard('tag1221');return false;" class="tag-decoration">v2-v2</div><div id="tag14736" onclick="CopyToClipboard('tag14736');return false;" class="tag-decoration">v2-v2.2</div><div id="tag26249" onclick="CopyToClipboard('tag26249');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e4c14926e2d84e8e9e45268ed3d94942349a0cc2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646367152" target="_blank">2026-10-21 17:43:41</a></td></tr>
<tr><td><div id="tag16431" onclick="CopyToClipboard('tag16431');return false;" class="tag-decoration">v2-develop</div><div id="tag894" onclick="CopyToClipboard('tag894');return false;" class="tag-decoration">v2-develop-b89797f</div><div id="tag2731" onclick="CopyToClipboard('tag2731');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag11273" onclick="CopyToClipboard('tag11273');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11675" onclick="CopyToClipboard('tag11675');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag32666" onclick="CopyToClipboard('tag32666');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b89797f2fd0d5e72962dd0f3a5ed7e01a665ceb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532890" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag8756" onclick="CopyToClipboard('tag8756');return false;" class="tag-decoration">v3</div><div id="tag18852" onclick="CopyToClipboard('tag18852');return false;" class="tag-decoration">v3-cae187b</div><div id="tag9793" onclick="CopyToClipboard('tag9793');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag18689" onclick="CopyToClipboard('tag18689');return false;" class="tag-decoration">v3-v3</div><div id="tag2206" onclick="CopyToClipboard('tag2206');return false;" class="tag-decoration">v3-v3.6</div><div id="tag13041" onclick="CopyToClipboard('tag13041');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cae187bd5ad6f492f779af265ca29e1b653dd096" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646361802" target="_blank">2026-10-21 17:43:39</a></td></tr>
<tr><td><div id="tag10747" onclick="CopyToClipboard('tag10747');return false;" class="tag-decoration">v3-develop</div><div id="tag8581" onclick="CopyToClipboard('tag8581');return false;" class="tag-decoration">v3-develop-e05e295</div><div id="tag6168" onclick="CopyToClipboard('tag6168');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag17101" onclick="CopyToClipboard('tag17101');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32528" onclick="CopyToClipboard('tag32528');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag5016" onclick="CopyToClipboard('tag5016');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e05e295f196f81dc289cd48b1b990244112322f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138538602" target="_blank">2026-10-18 15:00:42</a></td></tr>
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
