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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7489" onclick="CopyToClipboard('tag7489');return false;" class="tag-decoration">v2</div><div id="tag31499" onclick="CopyToClipboard('tag31499');return false;" class="tag-decoration">v2-7d444e2</div><div id="tag18622" onclick="CopyToClipboard('tag18622');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag11917" onclick="CopyToClipboard('tag11917');return false;" class="tag-decoration">v2-v2</div><div id="tag10482" onclick="CopyToClipboard('tag10482');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21548" onclick="CopyToClipboard('tag21548');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7d444e2f5fae15759c29fcfb99cbebd9bb3f4774" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524767678" target="_blank">2026-09-01 15:16:53</a></td></tr>
<tr><td><div id="tag13086" onclick="CopyToClipboard('tag13086');return false;" class="tag-decoration">v2-develop</div><div id="tag23813" onclick="CopyToClipboard('tag23813');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag23615" onclick="CopyToClipboard('tag23615');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag25271" onclick="CopyToClipboard('tag25271');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2677" onclick="CopyToClipboard('tag2677');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag28578" onclick="CopyToClipboard('tag28578');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag7164" onclick="CopyToClipboard('tag7164');return false;" class="tag-decoration">v3</div><div id="tag1466" onclick="CopyToClipboard('tag1466');return false;" class="tag-decoration">v3-71a470b</div><div id="tag14176" onclick="CopyToClipboard('tag14176');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag27330" onclick="CopyToClipboard('tag27330');return false;" class="tag-decoration">v3-v3</div><div id="tag21698" onclick="CopyToClipboard('tag21698');return false;" class="tag-decoration">v3-v3.4</div><div id="tag12732" onclick="CopyToClipboard('tag12732');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/71a470b9c1ab9c1ffd77fb178503b4332b502d9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524756120" target="_blank">2026-09-01 15:16:45</a></td></tr>
<tr><td><div id="tag21092" onclick="CopyToClipboard('tag21092');return false;" class="tag-decoration">v3-develop</div><div id="tag9863" onclick="CopyToClipboard('tag9863');return false;" class="tag-decoration">v3-develop-919cd34</div><div id="tag6845" onclick="CopyToClipboard('tag6845');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag11321" onclick="CopyToClipboard('tag11321');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10059" onclick="CopyToClipboard('tag10059');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag4630" onclick="CopyToClipboard('tag4630');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/919cd34bc910ac909306d11d02676b69f70dbcac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524764549" target="_blank">2026-09-01 15:16:51</a></td></tr>
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
