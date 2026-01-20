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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2756" onclick="CopyToClipboard('tag2756');return false;" class="tag-decoration">v2</div><div id="tag19383" onclick="CopyToClipboard('tag19383');return false;" class="tag-decoration">v2-f821635</div><div id="tag22674" onclick="CopyToClipboard('tag22674');return false;" class="tag-decoration">v2-2.0.0.2142</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f821635c2e6f577a2efd3fb94b8294db3d3fa172" target="_blank">Version update: 2.0.0.2130 => 2.0.0.2142</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162272259" target="_blank">2026-01-20 06:52:53</a></td></tr>
<tr><td><div id="tag29643" onclick="CopyToClipboard('tag29643');return false;" class="tag-decoration">v3</div><div id="tag15020" onclick="CopyToClipboard('tag15020');return false;" class="tag-decoration">v3-ab933a5</div><div id="tag13276" onclick="CopyToClipboard('tag13276');return false;" class="tag-decoration">v3-3.2.1-release.65</div><div id="tag24660" onclick="CopyToClipboard('tag24660');return false;" class="tag-decoration">v3-v3</div><div id="tag22351" onclick="CopyToClipboard('tag22351');return false;" class="tag-decoration">v3-v3.2</div><div id="tag22945" onclick="CopyToClipboard('tag22945');return false;" class="tag-decoration">v3-v3.2.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/ab933a599f8b6890a386eb5bed591deaf76b886f" target="_blank">Version update: 3.2.0-release.27 => 3.2.1-release.65</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162273867" target="_blank">2026-01-20 06:52:58</a></td></tr>
<tr><td><div id="tag3192" onclick="CopyToClipboard('tag3192');return false;" class="tag-decoration">v3-develop</div><div id="tag13071" onclick="CopyToClipboard('tag13071');return false;" class="tag-decoration">v3-develop-594adf2</div><div id="tag31864" onclick="CopyToClipboard('tag31864');return false;" class="tag-decoration">v3-develop-3.2.1-develop.67</div><div id="tag19761" onclick="CopyToClipboard('tag19761');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14722" onclick="CopyToClipboard('tag14722');return false;" class="tag-decoration">v3-develop-v3.2</div><div id="tag7389" onclick="CopyToClipboard('tag7389');return false;" class="tag-decoration">v3-develop-v3.2.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/594adf26fb708a7f1bfc4111a183b15dcee48a62" target="_blank">Version update: 3.2.1-develop.60 => 3.2.1-develop.67</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/21162273957" target="_blank">2026-01-20 06:52:54</a></td></tr>
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
