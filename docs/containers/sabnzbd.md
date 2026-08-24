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
<tr><td><div id="tag12307" onclick="CopyToClipboard('tag12307');return false;" class="tag-decoration">nightly</div><div id="tag13646" onclick="CopyToClipboard('tag13646');return false;" class="tag-decoration">nightly-67fd646</div><div id="tag27784" onclick="CopyToClipboard('tag27784');return false;" class="tag-decoration">nightly-5973e5b6ed1a8c3f4a745d9f08ee8a5b4c42d2ec</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/67fd64668258f8baa37cfab234fb4f530bab5be8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32703845560" target="_blank">2026-08-24 07:56:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6274" onclick="CopyToClipboard('tag6274');return false;" class="tag-decoration">release</div><div id="tag17479" onclick="CopyToClipboard('tag17479');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag13295" onclick="CopyToClipboard('tag13295');return false;" class="tag-decoration">release-5.1.1</div><div id="tag7445" onclick="CopyToClipboard('tag7445');return false;" class="tag-decoration">release-v5</div><div id="tag11638" onclick="CopyToClipboard('tag11638');return false;" class="tag-decoration">release-v5.1</div><div id="tag19351" onclick="CopyToClipboard('tag19351');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag24055" onclick="CopyToClipboard('tag24055');return false;" class="tag-decoration">testing</div><div id="tag5398" onclick="CopyToClipboard('tag5398');return false;" class="tag-decoration">testing-f806ed8</div><div id="tag10955" onclick="CopyToClipboard('tag10955');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag7688" onclick="CopyToClipboard('tag7688');return false;" class="tag-decoration">testing-v5</div><div id="tag16984" onclick="CopyToClipboard('tag16984');return false;" class="tag-decoration">testing-v5.1</div><div id="tag18848" onclick="CopyToClipboard('tag18848');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f806ed8c7c8bfadb7a20227f55fa33f0a842f3bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380901044" target="_blank">2026-08-20 14:34:00</a></td></tr>
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
