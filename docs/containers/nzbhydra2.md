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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27206" onclick="CopyToClipboard('tag27206');return false;" class="tag-decoration">release</div><div id="tag25520" onclick="CopyToClipboard('tag25520');return false;" class="tag-decoration">release-45e810a</div><div id="tag31025" onclick="CopyToClipboard('tag31025');return false;" class="tag-decoration">release-9.1.0</div><div id="tag3583" onclick="CopyToClipboard('tag3583');return false;" class="tag-decoration">release-v9</div><div id="tag9629" onclick="CopyToClipboard('tag9629');return false;" class="tag-decoration">release-v9.1</div><div id="tag22357" onclick="CopyToClipboard('tag22357');return false;" class="tag-decoration">release-v9.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/45e810af2f5a10d21629d04a2fa8327b1327e68f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36636041582" target="_blank">2026-09-29 21:51:45</a></td></tr>
<tr><td><div id="tag4049" onclick="CopyToClipboard('tag4049');return false;" class="tag-decoration">testing</div><div id="tag13147" onclick="CopyToClipboard('tag13147');return false;" class="tag-decoration">testing-8d7f047</div><div id="tag4082" onclick="CopyToClipboard('tag4082');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag27215" onclick="CopyToClipboard('tag27215');return false;" class="tag-decoration">testing-v9</div><div id="tag26015" onclick="CopyToClipboard('tag26015');return false;" class="tag-decoration">testing-v9.1</div><div id="tag11286" onclick="CopyToClipboard('tag11286');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8d7f0479f4e576e6579a8dad8f13aeb6d278fb3c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36768329934" target="_blank">2026-09-30 19:49:22</a></td></tr>
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
