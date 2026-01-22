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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26514" onclick="CopyToClipboard('tag26514');return false;" class="tag-decoration">release</div><div id="tag13370" onclick="CopyToClipboard('tag13370');return false;" class="tag-decoration">release-674f908</div><div id="tag29616" onclick="CopyToClipboard('tag29616');return false;" class="tag-decoration">release-8.3.0</div><div id="tag18385" onclick="CopyToClipboard('tag18385');return false;" class="tag-decoration">release-v8</div><div id="tag6664" onclick="CopyToClipboard('tag6664');return false;" class="tag-decoration">release-v8.3</div><div id="tag18348" onclick="CopyToClipboard('tag18348');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/674f9087182d67f09b6184a8c00ea2ec6ee01fd4" target="_blank">Upstream update: noblevpn-4c01d7f => noblevpn-6fa044b</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21237945237" target="_blank">2026-01-22 06:03:00</a></td></tr>
<tr><td><div id="tag2160" onclick="CopyToClipboard('tag2160');return false;" class="tag-decoration">testing</div><div id="tag6646" onclick="CopyToClipboard('tag6646');return false;" class="tag-decoration">testing-79ee021</div><div id="tag1510" onclick="CopyToClipboard('tag1510');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag30999" onclick="CopyToClipboard('tag30999');return false;" class="tag-decoration">testing-v8</div><div id="tag6624" onclick="CopyToClipboard('tag6624');return false;" class="tag-decoration">testing-v8.3</div><div id="tag18858" onclick="CopyToClipboard('tag18858');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/79ee02128ec0340eb3e5e7c3eff2e0b147cab5ad" target="_blank">Upstream update: noblevpn-6eb9503 => noblevpn-4c01d7f</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21200262157" target="_blank">2026-01-21 06:57:33</a></td></tr>
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
