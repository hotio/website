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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4468" onclick="CopyToClipboard('tag4468');return false;" class="tag-decoration">v2</div><div id="tag19341" onclick="CopyToClipboard('tag19341');return false;" class="tag-decoration">v2-6ea229b</div><div id="tag32389" onclick="CopyToClipboard('tag32389');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag30724" onclick="CopyToClipboard('tag30724');return false;" class="tag-decoration">v2-v2</div><div id="tag1737" onclick="CopyToClipboard('tag1737');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31652" onclick="CopyToClipboard('tag31652');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/6ea229b3d66042bb935b7d2ce6961ebbaeb0228b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138533454" target="_blank">2026-10-18 15:00:38</a></td></tr>
<tr><td><div id="tag9571" onclick="CopyToClipboard('tag9571');return false;" class="tag-decoration">v2-develop</div><div id="tag2064" onclick="CopyToClipboard('tag2064');return false;" class="tag-decoration">v2-develop-b89797f</div><div id="tag283" onclick="CopyToClipboard('tag283');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag8295" onclick="CopyToClipboard('tag8295');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13858" onclick="CopyToClipboard('tag13858');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag7774" onclick="CopyToClipboard('tag7774');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b89797f2fd0d5e72962dd0f3a5ed7e01a665ceb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532890" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag23440" onclick="CopyToClipboard('tag23440');return false;" class="tag-decoration">v3</div><div id="tag102" onclick="CopyToClipboard('tag102');return false;" class="tag-decoration">v3-de7f4e6</div><div id="tag16959" onclick="CopyToClipboard('tag16959');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag1411" onclick="CopyToClipboard('tag1411');return false;" class="tag-decoration">v3-v3</div><div id="tag22693" onclick="CopyToClipboard('tag22693');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1358" onclick="CopyToClipboard('tag1358');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/de7f4e670db8ee53949d1eeb9539c05e8ceb47f2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138532961" target="_blank">2026-10-18 15:00:37</a></td></tr>
<tr><td><div id="tag11277" onclick="CopyToClipboard('tag11277');return false;" class="tag-decoration">v3-develop</div><div id="tag19031" onclick="CopyToClipboard('tag19031');return false;" class="tag-decoration">v3-develop-e05e295</div><div id="tag21459" onclick="CopyToClipboard('tag21459');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag24890" onclick="CopyToClipboard('tag24890');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31296" onclick="CopyToClipboard('tag31296');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag21750" onclick="CopyToClipboard('tag21750');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e05e295f196f81dc289cd48b1b990244112322f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39138538602" target="_blank">2026-10-18 15:00:42</a></td></tr>
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
