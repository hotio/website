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
<tr><td><div id="tag26508" onclick="CopyToClipboard('tag26508');return false;" class="tag-decoration">nightly</div><div id="tag6736" onclick="CopyToClipboard('tag6736');return false;" class="tag-decoration">nightly-012c564</div><div id="tag7132" onclick="CopyToClipboard('tag7132');return false;" class="tag-decoration">nightly-2668f1cd267ce13722c9f695337a8f7d134f3fba</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/012c5647d89b7dce436df5f62cd320849bcdba98" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060109" target="_blank">2026-05-09 15:44:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7984" onclick="CopyToClipboard('tag7984');return false;" class="tag-decoration">release</div><div id="tag3014" onclick="CopyToClipboard('tag3014');return false;" class="tag-decoration">release-70618c1</div><div id="tag10679" onclick="CopyToClipboard('tag10679');return false;" class="tag-decoration">release-5.0.1</div><div id="tag9291" onclick="CopyToClipboard('tag9291');return false;" class="tag-decoration">release-v5</div><div id="tag16842" onclick="CopyToClipboard('tag16842');return false;" class="tag-decoration">release-v5.0</div><div id="tag24549" onclick="CopyToClipboard('tag24549');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/70618c1d37e8e032d3c5248918168c80911efd96" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060339" target="_blank">2026-05-09 15:44:05</a></td></tr>
<tr><td><div id="tag15437" onclick="CopyToClipboard('tag15437');return false;" class="tag-decoration">testing</div><div id="tag13391" onclick="CopyToClipboard('tag13391');return false;" class="tag-decoration">testing-9b582f1</div><div id="tag13715" onclick="CopyToClipboard('tag13715');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9b582f1b2e0a2a2b8850acc7f644cfc2e5e7f5a2" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25605060804" target="_blank">2026-05-09 15:44:06</a></td></tr>
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
