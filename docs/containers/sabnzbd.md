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
<tr><td><div id="tag21709" onclick="CopyToClipboard('tag21709');return false;" class="tag-decoration">nightly</div><div id="tag28945" onclick="CopyToClipboard('tag28945');return false;" class="tag-decoration">nightly-c188134</div><div id="tag28460" onclick="CopyToClipboard('tag28460');return false;" class="tag-decoration">nightly-cf14e24036c8d5cf1085fd24e3d899d4eb84e7b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/c188134a2a2e0ddafd2725773f74ae411e27bc1c" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21064908320" target="_blank">2026-01-16 11:18:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24488" onclick="CopyToClipboard('tag24488');return false;" class="tag-decoration">release</div><div id="tag32304" onclick="CopyToClipboard('tag32304');return false;" class="tag-decoration">release-87ae7a0</div><div id="tag14814" onclick="CopyToClipboard('tag14814');return false;" class="tag-decoration">release-4.5.5</div><div id="tag20321" onclick="CopyToClipboard('tag20321');return false;" class="tag-decoration">release-v4</div><div id="tag4594" onclick="CopyToClipboard('tag4594');return false;" class="tag-decoration">release-v4.5</div><div id="tag19215" onclick="CopyToClipboard('tag19215');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/87ae7a0bc79caabd5bf61c5df2056003b459d9dd" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21065741530" target="_blank">2026-01-16 11:52:56</a></td></tr>
<tr><td><div id="tag16281" onclick="CopyToClipboard('tag16281');return false;" class="tag-decoration">testing</div><div id="tag18434" onclick="CopyToClipboard('tag18434');return false;" class="tag-decoration">testing-e56afb3</div><div id="tag3743" onclick="CopyToClipboard('tag3743');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e56afb3adc856b1995b1fb829c64dc7c6d37743b" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21064908994" target="_blank">2026-01-16 11:18:57</a></td></tr>
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
