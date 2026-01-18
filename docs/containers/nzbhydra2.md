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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4493" onclick="CopyToClipboard('tag4493');return false;" class="tag-decoration">release</div><div id="tag22292" onclick="CopyToClipboard('tag22292');return false;" class="tag-decoration">release-cd733a1</div><div id="tag20626" onclick="CopyToClipboard('tag20626');return false;" class="tag-decoration">release-8.3.0</div><div id="tag1417" onclick="CopyToClipboard('tag1417');return false;" class="tag-decoration">release-v8</div><div id="tag26959" onclick="CopyToClipboard('tag26959');return false;" class="tag-decoration">release-v8.3</div><div id="tag8410" onclick="CopyToClipboard('tag8410');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/cd733a1f44a29c9f46e06d83661615929f5496b2" target="_blank">Upstream update: noblevpn-9c33abd => noblevpn-db01928</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21113696193" target="_blank">2026-01-18 14:57:01</a></td></tr>
<tr><td><div id="tag8327" onclick="CopyToClipboard('tag8327');return false;" class="tag-decoration">testing</div><div id="tag24354" onclick="CopyToClipboard('tag24354');return false;" class="tag-decoration">testing-e8abe08</div><div id="tag25480" onclick="CopyToClipboard('tag25480');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag28894" onclick="CopyToClipboard('tag28894');return false;" class="tag-decoration">testing-v8</div><div id="tag14906" onclick="CopyToClipboard('tag14906');return false;" class="tag-decoration">testing-v8.3</div><div id="tag19618" onclick="CopyToClipboard('tag19618');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/e8abe08ebdbb961933c62f721a06e82116843c4a" target="_blank">Upstream update: noblevpn-7d9e72c => noblevpn-9c33abd</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21090392522" target="_blank">2026-01-17 07:01:23</a></td></tr>
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
