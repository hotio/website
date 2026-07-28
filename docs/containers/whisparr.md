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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11351" onclick="CopyToClipboard('tag11351');return false;" class="tag-decoration">v2</div><div id="tag31822" onclick="CopyToClipboard('tag31822');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag12612" onclick="CopyToClipboard('tag12612');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag20355" onclick="CopyToClipboard('tag20355');return false;" class="tag-decoration">v2-v2</div><div id="tag2288" onclick="CopyToClipboard('tag2288');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31630" onclick="CopyToClipboard('tag31630');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag19558" onclick="CopyToClipboard('tag19558');return false;" class="tag-decoration">v2-develop</div><div id="tag31196" onclick="CopyToClipboard('tag31196');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag27998" onclick="CopyToClipboard('tag27998');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag27493" onclick="CopyToClipboard('tag27493');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag19810" onclick="CopyToClipboard('tag19810');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8056" onclick="CopyToClipboard('tag8056');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag14648" onclick="CopyToClipboard('tag14648');return false;" class="tag-decoration">v3</div><div id="tag22592" onclick="CopyToClipboard('tag22592');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag17634" onclick="CopyToClipboard('tag17634');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag17488" onclick="CopyToClipboard('tag17488');return false;" class="tag-decoration">v3-v3</div><div id="tag26619" onclick="CopyToClipboard('tag26619');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9074" onclick="CopyToClipboard('tag9074');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag2538" onclick="CopyToClipboard('tag2538');return false;" class="tag-decoration">v3-develop</div><div id="tag30390" onclick="CopyToClipboard('tag30390');return false;" class="tag-decoration">v3-develop-8a014dd</div><div id="tag14550" onclick="CopyToClipboard('tag14550');return false;" class="tag-decoration">v3-develop-3.3.8-develop.981</div><div id="tag6361" onclick="CopyToClipboard('tag6361');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11647" onclick="CopyToClipboard('tag11647');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag10483" onclick="CopyToClipboard('tag10483');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a014dd0144b505188a3ea9adddf5b8aadd20003" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382140469" target="_blank">2026-07-28 17:16:21</a></td></tr>
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
