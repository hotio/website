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
<tr><td><div id="tag29528" onclick="CopyToClipboard('tag29528');return false;" class="tag-decoration">nightly</div><div id="tag24639" onclick="CopyToClipboard('tag24639');return false;" class="tag-decoration">nightly-012c564</div><div id="tag5887" onclick="CopyToClipboard('tag5887');return false;" class="tag-decoration">nightly-2668f1cd267ce13722c9f695337a8f7d134f3fba</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/012c5647d89b7dce436df5f62cd320849bcdba98" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060109" target="_blank">2026-05-09 15:44:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2812" onclick="CopyToClipboard('tag2812');return false;" class="tag-decoration">release</div><div id="tag2215" onclick="CopyToClipboard('tag2215');return false;" class="tag-decoration">release-70618c1</div><div id="tag7071" onclick="CopyToClipboard('tag7071');return false;" class="tag-decoration">release-5.0.1</div><div id="tag15310" onclick="CopyToClipboard('tag15310');return false;" class="tag-decoration">release-v5</div><div id="tag7322" onclick="CopyToClipboard('tag7322');return false;" class="tag-decoration">release-v5.0</div><div id="tag31899" onclick="CopyToClipboard('tag31899');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/70618c1d37e8e032d3c5248918168c80911efd96" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060339" target="_blank">2026-05-09 15:44:05</a></td></tr>
<tr><td><div id="tag2041" onclick="CopyToClipboard('tag2041');return false;" class="tag-decoration">testing</div><div id="tag11847" onclick="CopyToClipboard('tag11847');return false;" class="tag-decoration">testing-8ce9054</div><div id="tag2382" onclick="CopyToClipboard('tag2382');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/8ce905493d9d459d6b9bc34b20485653418a7eb6" target="_blank">Version update: 5.0.1 => 5.0.2RC1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25549239469" target="_blank">2026-05-08 09:55:25</a></td></tr>
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
