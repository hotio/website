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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30144" onclick="CopyToClipboard('tag30144');return false;" class="tag-decoration">release</div><div id="tag30319" onclick="CopyToClipboard('tag30319');return false;" class="tag-decoration">release-9896546</div><div id="tag15391" onclick="CopyToClipboard('tag15391');return false;" class="tag-decoration">release-9.3.4</div><div id="tag27525" onclick="CopyToClipboard('tag27525');return false;" class="tag-decoration">release-v9</div><div id="tag7975" onclick="CopyToClipboard('tag7975');return false;" class="tag-decoration">release-v9.3</div><div id="tag4346" onclick="CopyToClipboard('tag4346');return false;" class="tag-decoration">release-v9.3.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/989654691fdb8fd8c191f146a64992450a2a14a1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45814585581" target="_blank">2026-11-26 11:53:15</a></td></tr>
<tr><td><div id="tag12335" onclick="CopyToClipboard('tag12335');return false;" class="tag-decoration">testing</div><div id="tag24202" onclick="CopyToClipboard('tag24202');return false;" class="tag-decoration">testing-2ac8eb8</div><div id="tag26376" onclick="CopyToClipboard('tag26376');return false;" class="tag-decoration">testing-9.3.4</div><div id="tag14729" onclick="CopyToClipboard('tag14729');return false;" class="tag-decoration">testing-v9</div><div id="tag3151" onclick="CopyToClipboard('tag3151');return false;" class="tag-decoration">testing-v9.3</div><div id="tag28126" onclick="CopyToClipboard('tag28126');return false;" class="tag-decoration">testing-v9.3.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2ac8eb8748b91f17a73b56e5630e860c9f2125b7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/45814589411" target="_blank">2026-11-26 11:53:17</a></td></tr>
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
