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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22858" onclick="CopyToClipboard('tag22858');return false;" class="tag-decoration">v2</div><div id="tag2660" onclick="CopyToClipboard('tag2660');return false;" class="tag-decoration">v2-e3f9ed7</div><div id="tag1618" onclick="CopyToClipboard('tag1618');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag24906" onclick="CopyToClipboard('tag24906');return false;" class="tag-decoration">v2-v2</div><div id="tag25919" onclick="CopyToClipboard('tag25919');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23260" onclick="CopyToClipboard('tag23260');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/e3f9ed77e12d9bf2897d2491633962dc288ac1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363840725" target="_blank">2026-09-18 15:40:14</a></td></tr>
<tr><td><div id="tag1637" onclick="CopyToClipboard('tag1637');return false;" class="tag-decoration">v2-develop</div><div id="tag30467" onclick="CopyToClipboard('tag30467');return false;" class="tag-decoration">v2-develop-5574480</div><div id="tag21226" onclick="CopyToClipboard('tag21226');return false;" class="tag-decoration">v2-develop-2.2.0-develop.380</div><div id="tag21414" onclick="CopyToClipboard('tag21414');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28776" onclick="CopyToClipboard('tag28776');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4054" onclick="CopyToClipboard('tag4054');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5574480ba93983a57e6b3e4ed191c77a04c34351" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363855676" target="_blank">2026-09-18 15:40:23</a></td></tr>
<tr><td><div id="tag10491" onclick="CopyToClipboard('tag10491');return false;" class="tag-decoration">v3</div><div id="tag20026" onclick="CopyToClipboard('tag20026');return false;" class="tag-decoration">v3-44c7018</div><div id="tag25064" onclick="CopyToClipboard('tag25064');return false;" class="tag-decoration">v3-3.6.0-release.1660</div><div id="tag21199" onclick="CopyToClipboard('tag21199');return false;" class="tag-decoration">v3-v3</div><div id="tag23907" onclick="CopyToClipboard('tag23907');return false;" class="tag-decoration">v3-v3.6</div><div id="tag1364" onclick="CopyToClipboard('tag1364');return false;" class="tag-decoration">v3-v3.6.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/44c70188b212c0edcc5a8dd8de67fef16b6994a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35363850436" target="_blank">2026-09-18 15:40:20</a></td></tr>
<tr><td><div id="tag1073" onclick="CopyToClipboard('tag1073');return false;" class="tag-decoration">v3-develop</div><div id="tag23339" onclick="CopyToClipboard('tag23339');return false;" class="tag-decoration">v3-develop-1e2884e</div><div id="tag20237" onclick="CopyToClipboard('tag20237');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1684</div><div id="tag27965" onclick="CopyToClipboard('tag27965');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag31718" onclick="CopyToClipboard('tag31718');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag18763" onclick="CopyToClipboard('tag18763');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1e2884ea82811750566eb7d12632d5fb663e8110" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35396275428" target="_blank">2026-09-18 21:20:31</a></td></tr>
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
