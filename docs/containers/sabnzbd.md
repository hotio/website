---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14357" onclick="CopyToClipboard('tag14357');return false;" class="tag-decoration">nightly</div><div id="tag5749" onclick="CopyToClipboard('tag5749');return false;" class="tag-decoration">nightly-6787b0c</div><div id="tag2202" onclick="CopyToClipboard('tag2202');return false;" class="tag-decoration">nightly-611dfa74d2ad85a3cfa451748f0b6702f7007fe1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6787b0c788764d2bf4e1c00201068f1bccc40d19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380905012" target="_blank">2026-08-20 14:34:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3169" onclick="CopyToClipboard('tag3169');return false;" class="tag-decoration">release</div><div id="tag4400" onclick="CopyToClipboard('tag4400');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag5679" onclick="CopyToClipboard('tag5679');return false;" class="tag-decoration">release-5.1.1</div><div id="tag2571" onclick="CopyToClipboard('tag2571');return false;" class="tag-decoration">release-v5</div><div id="tag30243" onclick="CopyToClipboard('tag30243');return false;" class="tag-decoration">release-v5.1</div><div id="tag6358" onclick="CopyToClipboard('tag6358');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag12424" onclick="CopyToClipboard('tag12424');return false;" class="tag-decoration">testing</div><div id="tag10852" onclick="CopyToClipboard('tag10852');return false;" class="tag-decoration">testing-f806ed8</div><div id="tag1398" onclick="CopyToClipboard('tag1398');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag12201" onclick="CopyToClipboard('tag12201');return false;" class="tag-decoration">testing-v5</div><div id="tag30493" onclick="CopyToClipboard('tag30493');return false;" class="tag-decoration">testing-v5.1</div><div id="tag21738" onclick="CopyToClipboard('tag21738');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f806ed8c7c8bfadb7a20227f55fa33f0a842f3bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380901044" target="_blank">2026-08-20 14:34:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
