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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4092" onclick="CopyToClipboard('tag4092');return false;" class="tag-decoration">v2</div><div id="tag21034" onclick="CopyToClipboard('tag21034');return false;" class="tag-decoration">v2-1a7f2a5</div><div id="tag27288" onclick="CopyToClipboard('tag27288');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag18285" onclick="CopyToClipboard('tag18285');return false;" class="tag-decoration">v2-v2</div><div id="tag25982" onclick="CopyToClipboard('tag25982');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1674" onclick="CopyToClipboard('tag1674');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/1a7f2a543ee73fcd51a52f8f93eff1e03dc3fc43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596997482" target="_blank">2026-10-27 22:43:39</a></td></tr>
<tr><td><div id="tag7020" onclick="CopyToClipboard('tag7020');return false;" class="tag-decoration">v2-develop</div><div id="tag24828" onclick="CopyToClipboard('tag24828');return false;" class="tag-decoration">v2-develop-4a212ea</div><div id="tag28580" onclick="CopyToClipboard('tag28580');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag15527" onclick="CopyToClipboard('tag15527');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5135" onclick="CopyToClipboard('tag5135');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18879" onclick="CopyToClipboard('tag18879');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4a212ea9bf5b63efbfa71c0a7c4f28d7921b8c3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596994204" target="_blank">2026-10-27 22:43:36</a></td></tr>
<tr><td><div id="tag15639" onclick="CopyToClipboard('tag15639');return false;" class="tag-decoration">v3</div><div id="tag20271" onclick="CopyToClipboard('tag20271');return false;" class="tag-decoration">v3-442ad67</div><div id="tag23435" onclick="CopyToClipboard('tag23435');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag7352" onclick="CopyToClipboard('tag7352');return false;" class="tag-decoration">v3-v3</div><div id="tag9110" onclick="CopyToClipboard('tag9110');return false;" class="tag-decoration">v3-v3.6</div><div id="tag26598" onclick="CopyToClipboard('tag26598');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/442ad67ffbb7c57cf22609adf248489cb81855bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40507610640" target="_blank">2026-10-27 12:55:14</a></td></tr>
<tr><td><div id="tag8162" onclick="CopyToClipboard('tag8162');return false;" class="tag-decoration">v3-develop</div><div id="tag18169" onclick="CopyToClipboard('tag18169');return false;" class="tag-decoration">v3-develop-d6274e6</div><div id="tag28946" onclick="CopyToClipboard('tag28946');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag19284" onclick="CopyToClipboard('tag19284');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19679" onclick="CopyToClipboard('tag19679');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag23879" onclick="CopyToClipboard('tag23879');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d6274e6cc6d6bb2a18411070f2dba903f9bccc8e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40596998526" target="_blank">2026-10-27 22:43:39</a></td></tr>
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
