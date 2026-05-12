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
<tr><td><div id="tag23427" onclick="CopyToClipboard('tag23427');return false;" class="tag-decoration">nightly</div><div id="tag4166" onclick="CopyToClipboard('tag4166');return false;" class="tag-decoration">nightly-e4c2a0b</div><div id="tag9091" onclick="CopyToClipboard('tag9091');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e4c2a0b144c62403c60c1802b5e25ec0391aa435" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25708438996" target="_blank">2026-05-12 01:53:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7614" onclick="CopyToClipboard('tag7614');return false;" class="tag-decoration">release</div><div id="tag4439" onclick="CopyToClipboard('tag4439');return false;" class="tag-decoration">release-95064dd</div><div id="tag31796" onclick="CopyToClipboard('tag31796');return false;" class="tag-decoration">release-5.0.1</div><div id="tag577" onclick="CopyToClipboard('tag577');return false;" class="tag-decoration">release-v5</div><div id="tag31509" onclick="CopyToClipboard('tag31509');return false;" class="tag-decoration">release-v5.0</div><div id="tag9992" onclick="CopyToClipboard('tag9992');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/95064dd1df88153c4e32b886ea09f313c1eb15a9" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25708441680" target="_blank">2026-05-12 01:53:15</a></td></tr>
<tr><td><div id="tag678" onclick="CopyToClipboard('tag678');return false;" class="tag-decoration">testing</div><div id="tag23679" onclick="CopyToClipboard('tag23679');return false;" class="tag-decoration">testing-addd38c</div><div id="tag2850" onclick="CopyToClipboard('tag2850');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/addd38ca7f5a2ddf81e235e71ebc463ace766a7f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25708444432" target="_blank">2026-05-12 01:53:20</a></td></tr>
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
