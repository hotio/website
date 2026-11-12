---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3119" onclick="CopyToClipboard('tag3119');return false;" class="tag-decoration">release</div><div id="tag29842" onclick="CopyToClipboard('tag29842');return false;" class="tag-decoration">release-64a5960</div><div id="tag23641" onclick="CopyToClipboard('tag23641');return false;" class="tag-decoration">release-9.3.1</div><div id="tag24642" onclick="CopyToClipboard('tag24642');return false;" class="tag-decoration">release-v9</div><div id="tag5458" onclick="CopyToClipboard('tag5458');return false;" class="tag-decoration">release-v9.3</div><div id="tag10147" onclick="CopyToClipboard('tag10147');return false;" class="tag-decoration">release-v9.3.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/64a59609c38ca2cb2eb7223cf5f613d51befe1a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43326956639" target="_blank">2026-11-12 23:13:03</a></td></tr>
<tr><td><div id="tag18325" onclick="CopyToClipboard('tag18325');return false;" class="tag-decoration">testing</div><div id="tag2577" onclick="CopyToClipboard('tag2577');return false;" class="tag-decoration">testing-f83eec6</div><div id="tag27406" onclick="CopyToClipboard('tag27406');return false;" class="tag-decoration">testing-9.3.1</div><div id="tag5883" onclick="CopyToClipboard('tag5883');return false;" class="tag-decoration">testing-v9</div><div id="tag26892" onclick="CopyToClipboard('tag26892');return false;" class="tag-decoration">testing-v9.3</div><div id="tag14896" onclick="CopyToClipboard('tag14896');return false;" class="tag-decoration">testing-v9.3.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f83eec659d8fe55654cfb3662eb1f7713dcd8664" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43326948676" target="_blank">2026-11-12 23:13:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
