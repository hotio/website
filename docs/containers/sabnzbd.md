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
<tr><td><div id="tag15792" onclick="CopyToClipboard('tag15792');return false;" class="tag-decoration">nightly</div><div id="tag23390" onclick="CopyToClipboard('tag23390');return false;" class="tag-decoration">nightly-9ed5d52</div><div id="tag29815" onclick="CopyToClipboard('tag29815');return false;" class="tag-decoration">nightly-61df709a04d5ca8572fecb12b355bb2a1d15aa15</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/9ed5d52240f106712886f8aec0718ce5a70207d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31585613780" target="_blank">2026-08-12 10:02:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4432" onclick="CopyToClipboard('tag4432');return false;" class="tag-decoration">release</div><div id="tag32081" onclick="CopyToClipboard('tag32081');return false;" class="tag-decoration">release-2916138</div><div id="tag11524" onclick="CopyToClipboard('tag11524');return false;" class="tag-decoration">release-5.1.0</div><div id="tag20461" onclick="CopyToClipboard('tag20461');return false;" class="tag-decoration">release-v5</div><div id="tag19730" onclick="CopyToClipboard('tag19730');return false;" class="tag-decoration">release-v5.1</div><div id="tag30019" onclick="CopyToClipboard('tag30019');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2916138071676b34ce6eca981b052a531e8495c0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390982584" target="_blank">2026-08-10 13:03:40</a></td></tr>
<tr><td><div id="tag6167" onclick="CopyToClipboard('tag6167');return false;" class="tag-decoration">testing</div><div id="tag8686" onclick="CopyToClipboard('tag8686');return false;" class="tag-decoration">testing-548e80e</div><div id="tag22754" onclick="CopyToClipboard('tag22754');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag4933" onclick="CopyToClipboard('tag4933');return false;" class="tag-decoration">testing-v5</div><div id="tag8307" onclick="CopyToClipboard('tag8307');return false;" class="tag-decoration">testing-v5.1</div><div id="tag4456" onclick="CopyToClipboard('tag4456');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/548e80e4667e44fbaf1cbc46cbad2e8a8a29718f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390988136" target="_blank">2026-08-10 13:03:45</a></td></tr>
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
