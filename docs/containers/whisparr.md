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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22460" onclick="CopyToClipboard('tag22460');return false;" class="tag-decoration">v2</div><div id="tag19688" onclick="CopyToClipboard('tag19688');return false;" class="tag-decoration">v2-f821635</div><div id="tag21277" onclick="CopyToClipboard('tag21277');return false;" class="tag-decoration">v2-2.0.0.2142</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f821635c2e6f577a2efd3fb94b8294db3d3fa172" target="_blank">Version update: 2.0.0.2130 => 2.0.0.2142</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162272259" target="_blank">2026-01-20 06:52:53</a></td></tr>
<tr><td><div id="tag15308" onclick="CopyToClipboard('tag15308');return false;" class="tag-decoration">v3</div><div id="tag20057" onclick="CopyToClipboard('tag20057');return false;" class="tag-decoration">v3-ab933a5</div><div id="tag9549" onclick="CopyToClipboard('tag9549');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag20430" onclick="CopyToClipboard('tag20430');return false;" class="tag-decoration">v3-v3</div><div id="tag9408" onclick="CopyToClipboard('tag9408');return false;" class="tag-decoration">v3-v3.2</div><div id="tag11310" onclick="CopyToClipboard('tag11310');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/ab933a599f8b6890a386eb5bed591deaf76b886f" target="_blank">Version update: 3.2.0-release.27 => 3.2.1-release.65</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162273867" target="_blank">2026-01-20 06:52:58</a></td></tr>
<tr><td><div id="tag26635" onclick="CopyToClipboard('tag26635');return false;" class="tag-decoration">v3-develop</div><div id="tag15424" onclick="CopyToClipboard('tag15424');return false;" class="tag-decoration">v3-develop-477667f</div><div id="tag294" onclick="CopyToClipboard('tag294');return false;" class="tag-decoration">v3-develop-3.2.1-develop.69</div><div id="tag3948" onclick="CopyToClipboard('tag3948');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31996" onclick="CopyToClipboard('tag31996');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag12928" onclick="CopyToClipboard('tag12928');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/477667f19ec8386690252ef5fb47b970b9c50c15" target="_blank">Version update: 3.2.1-develop.67 => 3.2.1-develop.69</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21185775707" target="_blank">2026-01-20 20:16:31</a></td></tr>
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
