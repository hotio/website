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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12108" onclick="CopyToClipboard('tag12108');return false;" class="tag-decoration">v2</div><div id="tag27999" onclick="CopyToClipboard('tag27999');return false;" class="tag-decoration">v2-ca7e047</div><div id="tag17134" onclick="CopyToClipboard('tag17134');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag7692" onclick="CopyToClipboard('tag7692');return false;" class="tag-decoration">v2-v2</div><div id="tag30338" onclick="CopyToClipboard('tag30338');return false;" class="tag-decoration">v2-v2.2</div><div id="tag5010" onclick="CopyToClipboard('tag5010');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ca7e047a52ec0c871fe6a5bf28604746fe48ba54" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767601700" target="_blank">2026-09-30 19:43:00</a></td></tr>
<tr><td><div id="tag23763" onclick="CopyToClipboard('tag23763');return false;" class="tag-decoration">v2-develop</div><div id="tag4375" onclick="CopyToClipboard('tag4375');return false;" class="tag-decoration">v2-develop-16fd73a</div><div id="tag1647" onclick="CopyToClipboard('tag1647');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag15984" onclick="CopyToClipboard('tag15984');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag9395" onclick="CopyToClipboard('tag9395');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22769" onclick="CopyToClipboard('tag22769');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/16fd73aa2cfe8f883938062debfb21c17af570d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767602397" target="_blank">2026-09-30 19:43:01</a></td></tr>
<tr><td><div id="tag22984" onclick="CopyToClipboard('tag22984');return false;" class="tag-decoration">v3</div><div id="tag7988" onclick="CopyToClipboard('tag7988');return false;" class="tag-decoration">v3-1d21d81</div><div id="tag27948" onclick="CopyToClipboard('tag27948');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag28" onclick="CopyToClipboard('tag28');return false;" class="tag-decoration">v3-v3</div><div id="tag9780" onclick="CopyToClipboard('tag9780');return false;" class="tag-decoration">v3-v3.6</div><div id="tag10502" onclick="CopyToClipboard('tag10502');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/1d21d8160a7277e7b799544e1fef8a6abfecfd28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767605536" target="_blank">2026-09-30 19:43:03</a></td></tr>
<tr><td><div id="tag11421" onclick="CopyToClipboard('tag11421');return false;" class="tag-decoration">v3-develop</div><div id="tag24601" onclick="CopyToClipboard('tag24601');return false;" class="tag-decoration">v3-develop-a3a4c3a</div><div id="tag28664" onclick="CopyToClipboard('tag28664');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag2251" onclick="CopyToClipboard('tag2251');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag18913" onclick="CopyToClipboard('tag18913');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1322" onclick="CopyToClipboard('tag1322');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a3a4c3ac4709362bdb0195b6e9a050f55a7cb30a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36767594545" target="_blank">2026-09-30 19:42:57</a></td></tr>
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
