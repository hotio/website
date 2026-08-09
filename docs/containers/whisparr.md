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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30957" onclick="CopyToClipboard('tag30957');return false;" class="tag-decoration">v2</div><div id="tag31918" onclick="CopyToClipboard('tag31918');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag8500" onclick="CopyToClipboard('tag8500');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10370" onclick="CopyToClipboard('tag10370');return false;" class="tag-decoration">v2-v2</div><div id="tag27985" onclick="CopyToClipboard('tag27985');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31818" onclick="CopyToClipboard('tag31818');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag22163" onclick="CopyToClipboard('tag22163');return false;" class="tag-decoration">v2-develop</div><div id="tag31845" onclick="CopyToClipboard('tag31845');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag22508" onclick="CopyToClipboard('tag22508');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag20833" onclick="CopyToClipboard('tag20833');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2041" onclick="CopyToClipboard('tag2041');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23168" onclick="CopyToClipboard('tag23168');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag14005" onclick="CopyToClipboard('tag14005');return false;" class="tag-decoration">v3</div><div id="tag10771" onclick="CopyToClipboard('tag10771');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag31386" onclick="CopyToClipboard('tag31386');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag1282" onclick="CopyToClipboard('tag1282');return false;" class="tag-decoration">v3-v3</div><div id="tag21090" onclick="CopyToClipboard('tag21090');return false;" class="tag-decoration">v3-v3.3</div><div id="tag10730" onclick="CopyToClipboard('tag10730');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag30395" onclick="CopyToClipboard('tag30395');return false;" class="tag-decoration">v3-develop</div><div id="tag32622" onclick="CopyToClipboard('tag32622');return false;" class="tag-decoration">v3-develop-d4856ea</div><div id="tag14633" onclick="CopyToClipboard('tag14633');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1047</div><div id="tag12044" onclick="CopyToClipboard('tag12044');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18392" onclick="CopyToClipboard('tag18392');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag4856" onclick="CopyToClipboard('tag4856');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d4856ea2ff2e7ffa623fd646ffd5ce456e4f4797" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31293950532" target="_blank">2026-08-09 04:09:00</a></td></tr>
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
