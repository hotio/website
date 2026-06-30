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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12460" onclick="CopyToClipboard('tag12460');return false;" class="tag-decoration">v2</div><div id="tag7583" onclick="CopyToClipboard('tag7583');return false;" class="tag-decoration">v2-b4cafd0</div><div id="tag7727" onclick="CopyToClipboard('tag7727');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6540" onclick="CopyToClipboard('tag6540');return false;" class="tag-decoration">v2-v2</div><div id="tag18406" onclick="CopyToClipboard('tag18406');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31060" onclick="CopyToClipboard('tag31060');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b4cafd068010be73de87e6dea8491badfba85189" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395539195" target="_blank">2026-06-29 18:56:47</a></td></tr>
<tr><td><div id="tag23659" onclick="CopyToClipboard('tag23659');return false;" class="tag-decoration">v2-develop</div><div id="tag25132" onclick="CopyToClipboard('tag25132');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag27483" onclick="CopyToClipboard('tag27483');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag20684" onclick="CopyToClipboard('tag20684');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag8042" onclick="CopyToClipboard('tag8042');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11632" onclick="CopyToClipboard('tag11632');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag27362" onclick="CopyToClipboard('tag27362');return false;" class="tag-decoration">v3</div><div id="tag21799" onclick="CopyToClipboard('tag21799');return false;" class="tag-decoration">v3-e28b35c</div><div id="tag20440" onclick="CopyToClipboard('tag20440');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag12819" onclick="CopyToClipboard('tag12819');return false;" class="tag-decoration">v3-v3</div><div id="tag5095" onclick="CopyToClipboard('tag5095');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14962" onclick="CopyToClipboard('tag14962');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e28b35c45131e5cc421b92a5cbe27a277d12aebc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312811" target="_blank">2026-06-30 13:01:59</a></td></tr>
<tr><td><div id="tag20798" onclick="CopyToClipboard('tag20798');return false;" class="tag-decoration">v3-develop</div><div id="tag2448" onclick="CopyToClipboard('tag2448');return false;" class="tag-decoration">v3-develop-47e7b82</div><div id="tag26971" onclick="CopyToClipboard('tag26971');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag14679" onclick="CopyToClipboard('tag14679');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6577" onclick="CopyToClipboard('tag6577');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31040" onclick="CopyToClipboard('tag31040');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/47e7b82111cae0f8d612b5c0ea42ff88d0e114d1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28395536353" target="_blank">2026-06-29 18:56:44</a></td></tr>
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
