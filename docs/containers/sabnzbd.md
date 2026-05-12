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
<tr><td><div id="tag13587" onclick="CopyToClipboard('tag13587');return false;" class="tag-decoration">nightly</div><div id="tag30800" onclick="CopyToClipboard('tag30800');return false;" class="tag-decoration">nightly-4d34933</div><div id="tag23238" onclick="CopyToClipboard('tag23238');return false;" class="tag-decoration">nightly-90798e5e4dcbd2e45bc0aa36f95de482e08b8cea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4d34933e2f808ec78e7d62181460c1ddd99520f2" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25707234389" target="_blank">2026-05-12 01:17:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14997" onclick="CopyToClipboard('tag14997');return false;" class="tag-decoration">release</div><div id="tag105" onclick="CopyToClipboard('tag105');return false;" class="tag-decoration">release-312d3a4</div><div id="tag31263" onclick="CopyToClipboard('tag31263');return false;" class="tag-decoration">release-5.0.1</div><div id="tag17943" onclick="CopyToClipboard('tag17943');return false;" class="tag-decoration">release-v5</div><div id="tag31098" onclick="CopyToClipboard('tag31098');return false;" class="tag-decoration">release-v5.0</div><div id="tag25952" onclick="CopyToClipboard('tag25952');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/312d3a40ce91020b64217022e5a71d1540c50f3a" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25706912303" target="_blank">2026-05-12 01:07:42</a></td></tr>
<tr><td><div id="tag26368" onclick="CopyToClipboard('tag26368');return false;" class="tag-decoration">testing</div><div id="tag4244" onclick="CopyToClipboard('tag4244');return false;" class="tag-decoration">testing-4524697</div><div id="tag14883" onclick="CopyToClipboard('tag14883');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4524697cb0d3b69bd0a56c9dcead9357fffb5ed0" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25706918461" target="_blank">2026-05-12 01:07:52</a></td></tr>
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
