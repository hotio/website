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
<tr><td><div id="tag14840" onclick="CopyToClipboard('tag14840');return false;" class="tag-decoration">nightly</div><div id="tag1267" onclick="CopyToClipboard('tag1267');return false;" class="tag-decoration">nightly-4d34933</div><div id="tag27314" onclick="CopyToClipboard('tag27314');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4d34933e2f808ec78e7d62181460c1ddd99520f2" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25707234389" target="_blank">2026-05-12 01:17:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10851" onclick="CopyToClipboard('tag10851');return false;" class="tag-decoration">release</div><div id="tag1806" onclick="CopyToClipboard('tag1806');return false;" class="tag-decoration">release-11a01b7</div><div id="tag9414" onclick="CopyToClipboard('tag9414');return false;" class="tag-decoration">release-5.0.1</div><div id="tag6346" onclick="CopyToClipboard('tag6346');return false;" class="tag-decoration">release-v5</div><div id="tag23622" onclick="CopyToClipboard('tag23622');return false;" class="tag-decoration">release-v5.0</div><div id="tag17568" onclick="CopyToClipboard('tag17568');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/11a01b78ceeba5471f7cb80aa2e311e647031cb8" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25707239420" target="_blank">2026-05-12 01:17:20</a></td></tr>
<tr><td><div id="tag23417" onclick="CopyToClipboard('tag23417');return false;" class="tag-decoration">testing</div><div id="tag25975" onclick="CopyToClipboard('tag25975');return false;" class="tag-decoration">testing-7887761</div><div id="tag6790" onclick="CopyToClipboard('tag6790');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/788776138567dd301d740b3282b41a6e30225333" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25707243284" target="_blank">2026-05-12 01:17:27</a></td></tr>
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
