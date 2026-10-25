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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7015" onclick="CopyToClipboard('tag7015');return false;" class="tag-decoration">v2</div><div id="tag25448" onclick="CopyToClipboard('tag25448');return false;" class="tag-decoration">v2-9f598f3</div><div id="tag19266" onclick="CopyToClipboard('tag19266');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag14000" onclick="CopyToClipboard('tag14000');return false;" class="tag-decoration">v2-v2</div><div id="tag8504" onclick="CopyToClipboard('tag8504');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32311" onclick="CopyToClipboard('tag32311');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9f598f3e2bbe0b440f298ec92bcfb4b62a155935" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229566913" target="_blank">2026-10-25 20:11:05</a></td></tr>
<tr><td><div id="tag5826" onclick="CopyToClipboard('tag5826');return false;" class="tag-decoration">v2-develop</div><div id="tag2561" onclick="CopyToClipboard('tag2561');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag12896" onclick="CopyToClipboard('tag12896');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2740" onclick="CopyToClipboard('tag2740');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9607" onclick="CopyToClipboard('tag9607');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25506" onclick="CopyToClipboard('tag25506');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag13840" onclick="CopyToClipboard('tag13840');return false;" class="tag-decoration">v3</div><div id="tag13879" onclick="CopyToClipboard('tag13879');return false;" class="tag-decoration">v3-8f93042</div><div id="tag20199" onclick="CopyToClipboard('tag20199');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag6211" onclick="CopyToClipboard('tag6211');return false;" class="tag-decoration">v3-v3</div><div id="tag27400" onclick="CopyToClipboard('tag27400');return false;" class="tag-decoration">v3-v3.6</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8f9304219aaf1e3138a6b7b1ba7400d9a96bb538" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070915762" target="_blank">2026-10-24 06:37:06</a></td></tr>
<tr><td><div id="tag2124" onclick="CopyToClipboard('tag2124');return false;" class="tag-decoration">v3-develop</div><div id="tag28670" onclick="CopyToClipboard('tag28670');return false;" class="tag-decoration">v3-develop-0a811a3</div><div id="tag5969" onclick="CopyToClipboard('tag5969');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag21728" onclick="CopyToClipboard('tag21728');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10221" onclick="CopyToClipboard('tag10221');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag3261" onclick="CopyToClipboard('tag3261');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/0a811a35eecb51b15b44c3edc57c0179c1458fe9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070918872" target="_blank">2026-10-24 06:37:09</a></td></tr>
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
