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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7031" onclick="CopyToClipboard('tag7031');return false;" class="tag-decoration">v2</div><div id="tag234" onclick="CopyToClipboard('tag234');return false;" class="tag-decoration">v2-9f598f3</div><div id="tag25391" onclick="CopyToClipboard('tag25391');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag1764" onclick="CopyToClipboard('tag1764');return false;" class="tag-decoration">v2-v2</div><div id="tag13319" onclick="CopyToClipboard('tag13319');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11180" onclick="CopyToClipboard('tag11180');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9f598f3e2bbe0b440f298ec92bcfb4b62a155935" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229566913" target="_blank">2026-10-25 20:11:05</a></td></tr>
<tr><td><div id="tag5821" onclick="CopyToClipboard('tag5821');return false;" class="tag-decoration">v2-develop</div><div id="tag32675" onclick="CopyToClipboard('tag32675');return false;" class="tag-decoration">v2-develop-6fec5d3</div><div id="tag28684" onclick="CopyToClipboard('tag28684');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag5126" onclick="CopyToClipboard('tag5126');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2549" onclick="CopyToClipboard('tag2549');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23069" onclick="CopyToClipboard('tag23069');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6fec5d389a8513e41448989d2316fbe100736675" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229561180" target="_blank">2026-10-25 20:11:01</a></td></tr>
<tr><td><div id="tag28839" onclick="CopyToClipboard('tag28839');return false;" class="tag-decoration">v3</div><div id="tag18477" onclick="CopyToClipboard('tag18477');return false;" class="tag-decoration">v3-8f93042</div><div id="tag19488" onclick="CopyToClipboard('tag19488');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag11250" onclick="CopyToClipboard('tag11250');return false;" class="tag-decoration">v3-v3</div><div id="tag13058" onclick="CopyToClipboard('tag13058');return false;" class="tag-decoration">v3-v3.6</div><div id="tag30152" onclick="CopyToClipboard('tag30152');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8f9304219aaf1e3138a6b7b1ba7400d9a96bb538" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40070915762" target="_blank">2026-10-24 06:37:06</a></td></tr>
<tr><td><div id="tag23070" onclick="CopyToClipboard('tag23070');return false;" class="tag-decoration">v3-develop</div><div id="tag20470" onclick="CopyToClipboard('tag20470');return false;" class="tag-decoration">v3-develop-6be2f44</div><div id="tag12302" onclick="CopyToClipboard('tag12302');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag27306" onclick="CopyToClipboard('tag27306');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32539" onclick="CopyToClipboard('tag32539');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag3077" onclick="CopyToClipboard('tag3077');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6be2f4483b5d24df48894ac5a0eed2c79e734913" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/40229565433" target="_blank">2026-10-25 20:11:04</a></td></tr>
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
