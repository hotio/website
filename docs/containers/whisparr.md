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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23416" onclick="CopyToClipboard('tag23416');return false;" class="tag-decoration">v2</div><div id="tag7238" onclick="CopyToClipboard('tag7238');return false;" class="tag-decoration">v2-640b6d0</div><div id="tag24884" onclick="CopyToClipboard('tag24884');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7879" onclick="CopyToClipboard('tag7879');return false;" class="tag-decoration">v2-v2</div><div id="tag23861" onclick="CopyToClipboard('tag23861');return false;" class="tag-decoration">v2-v2.2</div><div id="tag3239" onclick="CopyToClipboard('tag3239');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/640b6d02dacd2ffb7e9228a830a5ec50e512fa39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33498575525" target="_blank">2026-09-01 10:39:59</a></td></tr>
<tr><td><div id="tag12552" onclick="CopyToClipboard('tag12552');return false;" class="tag-decoration">v2-develop</div><div id="tag5927" onclick="CopyToClipboard('tag5927');return false;" class="tag-decoration">v2-develop-da3011e</div><div id="tag4263" onclick="CopyToClipboard('tag4263');return false;" class="tag-decoration">v2-develop-2.2.0-develop.334</div><div id="tag6884" onclick="CopyToClipboard('tag6884');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag14254" onclick="CopyToClipboard('tag14254');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag14121" onclick="CopyToClipboard('tag14121');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/da3011ed3db2e76cd306fe92b87d9441c1cac17a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524763878" target="_blank">2026-09-01 15:16:50</a></td></tr>
<tr><td><div id="tag11899" onclick="CopyToClipboard('tag11899');return false;" class="tag-decoration">v3</div><div id="tag7149" onclick="CopyToClipboard('tag7149');return false;" class="tag-decoration">v3-71a470b</div><div id="tag3233" onclick="CopyToClipboard('tag3233');return false;" class="tag-decoration">v3-3.4.0-release.1387</div><div id="tag14219" onclick="CopyToClipboard('tag14219');return false;" class="tag-decoration">v3-v3</div><div id="tag12760" onclick="CopyToClipboard('tag12760');return false;" class="tag-decoration">v3-v3.4</div><div id="tag14401" onclick="CopyToClipboard('tag14401');return false;" class="tag-decoration">v3-v3.4.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/71a470b9c1ab9c1ffd77fb178503b4332b502d9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524756120" target="_blank">2026-09-01 15:16:45</a></td></tr>
<tr><td><div id="tag1764" onclick="CopyToClipboard('tag1764');return false;" class="tag-decoration">v3-develop</div><div id="tag26532" onclick="CopyToClipboard('tag26532');return false;" class="tag-decoration">v3-develop-919cd34</div><div id="tag7691" onclick="CopyToClipboard('tag7691');return false;" class="tag-decoration">v3-develop-3.4.1-develop.1444</div><div id="tag22422" onclick="CopyToClipboard('tag22422');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18604" onclick="CopyToClipboard('tag18604');return false;" class="tag-decoration">v3-develop-v3.4</div><div id="tag2119" onclick="CopyToClipboard('tag2119');return false;" class="tag-decoration">v3-develop-v3.4.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/919cd34bc910ac909306d11d02676b69f70dbcac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/33524764549" target="_blank">2026-09-01 15:16:51</a></td></tr>
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
