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
<tr><td><div id="tag13106" onclick="CopyToClipboard('tag13106');return false;" class="tag-decoration">nightly</div><div id="tag21087" onclick="CopyToClipboard('tag21087');return false;" class="tag-decoration">nightly-012c564</div><div id="tag31003" onclick="CopyToClipboard('tag31003');return false;" class="tag-decoration">nightly-2668f1cd267ce13722c9f695337a8f7d134f3fba</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/012c5647d89b7dce436df5f62cd320849bcdba98" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060109" target="_blank">2026-05-09 15:44:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7648" onclick="CopyToClipboard('tag7648');return false;" class="tag-decoration">release</div><div id="tag19764" onclick="CopyToClipboard('tag19764');return false;" class="tag-decoration">release-83955ca</div><div id="tag3399" onclick="CopyToClipboard('tag3399');return false;" class="tag-decoration">release-5.0.1</div><div id="tag24153" onclick="CopyToClipboard('tag24153');return false;" class="tag-decoration">release-v5</div><div id="tag21679" onclick="CopyToClipboard('tag21679');return false;" class="tag-decoration">release-v5.0</div><div id="tag21903" onclick="CopyToClipboard('tag21903');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83955ca245d4949e4c58d3e96c9199ee430f62b8" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234298284" target="_blank">2026-05-01 21:38:26</a></td></tr>
<tr><td><div id="tag25474" onclick="CopyToClipboard('tag25474');return false;" class="tag-decoration">testing</div><div id="tag11376" onclick="CopyToClipboard('tag11376');return false;" class="tag-decoration">testing-8ce9054</div><div id="tag23420" onclick="CopyToClipboard('tag23420');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/8ce905493d9d459d6b9bc34b20485653418a7eb6" target="_blank">Version update: 5.0.1 => 5.0.2RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25549239469" target="_blank">2026-05-08 09:55:25</a></td></tr>
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
