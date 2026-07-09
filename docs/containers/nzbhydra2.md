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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3951" onclick="CopyToClipboard('tag3951');return false;" class="tag-decoration">release</div><div id="tag4136" onclick="CopyToClipboard('tag4136');return false;" class="tag-decoration">release-0d89e55</div><div id="tag4002" onclick="CopyToClipboard('tag4002');return false;" class="tag-decoration">release-8.9.0</div><div id="tag4797" onclick="CopyToClipboard('tag4797');return false;" class="tag-decoration">release-v8</div><div id="tag16953" onclick="CopyToClipboard('tag16953');return false;" class="tag-decoration">release-v8.9</div><div id="tag10055" onclick="CopyToClipboard('tag10055');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0d89e55c3e6d4f53a36b728a7f264b14bcb1bc07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29042068294" target="_blank">2026-07-09 18:49:18</a></td></tr>
<tr><td><div id="tag16509" onclick="CopyToClipboard('tag16509');return false;" class="tag-decoration">testing</div><div id="tag6577" onclick="CopyToClipboard('tag6577');return false;" class="tag-decoration">testing-bd4f693</div><div id="tag29952" onclick="CopyToClipboard('tag29952');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag5485" onclick="CopyToClipboard('tag5485');return false;" class="tag-decoration">testing-v8</div><div id="tag18860" onclick="CopyToClipboard('tag18860');return false;" class="tag-decoration">testing-v8.9</div><div id="tag5294" onclick="CopyToClipboard('tag5294');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/bd4f693beabdc0ee801dc7f00e80f139e0b76554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29042064141" target="_blank">2026-07-09 18:49:14</a></td></tr>
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
