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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27328" onclick="CopyToClipboard('tag27328');return false;" class="tag-decoration">v2</div><div id="tag27329" onclick="CopyToClipboard('tag27329');return false;" class="tag-decoration">v2-c8c8c34</div><div id="tag28984" onclick="CopyToClipboard('tag28984');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag8884" onclick="CopyToClipboard('tag8884');return false;" class="tag-decoration">v2-v2</div><div id="tag3768" onclick="CopyToClipboard('tag3768');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17629" onclick="CopyToClipboard('tag17629');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c8c8c345edd25276ceb5cccc85d5db21da8e5cea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39696289709" target="_blank">2026-10-21 23:53:20</a></td></tr>
<tr><td><div id="tag28606" onclick="CopyToClipboard('tag28606');return false;" class="tag-decoration">v2-develop</div><div id="tag14748" onclick="CopyToClipboard('tag14748');return false;" class="tag-decoration">v2-develop-2c67e73</div><div id="tag8152" onclick="CopyToClipboard('tag8152');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag25024" onclick="CopyToClipboard('tag25024');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag3858" onclick="CopyToClipboard('tag3858');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1337" onclick="CopyToClipboard('tag1337');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/2c67e7393903510b35e0cd1776f445860fe305ff" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39646374016" target="_blank">2026-10-21 17:43:44</a></td></tr>
<tr><td><div id="tag26332" onclick="CopyToClipboard('tag26332');return false;" class="tag-decoration">v3</div><div id="tag30736" onclick="CopyToClipboard('tag30736');return false;" class="tag-decoration">v3-2f7567a</div><div id="tag535" onclick="CopyToClipboard('tag535');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7337" onclick="CopyToClipboard('tag7337');return false;" class="tag-decoration">v3-v3</div><div id="tag10005" onclick="CopyToClipboard('tag10005');return false;" class="tag-decoration">v3-v3.6</div><div id="tag26910" onclick="CopyToClipboard('tag26910');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/2f7567ac9afe8543f9534d645152abf2765a4f49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/39674895749" target="_blank">2026-10-21 20:58:21</a></td></tr>
<tr><td><div id="tag3375" onclick="CopyToClipboard('tag3375');return false;" class="tag-decoration">v3-develop</div><div id="tag14217" onclick="CopyToClipboard('tag14217');return false;" class="tag-decoration">v3-develop-0a811a3</div><div id="tag5373" onclick="CopyToClipboard('tag5373');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag27514" onclick="CopyToClipboard('tag27514');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6218" onclick="CopyToClipboard('tag6218');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag19204" onclick="CopyToClipboard('tag19204');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0a811a35eecb51b15b44c3edc57c0179c1458fe9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070918872" target="_blank">2026-10-24 06:37:09</a></td></tr>
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
