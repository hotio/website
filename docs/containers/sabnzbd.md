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
<tr><td><div id="tag23744" onclick="CopyToClipboard('tag23744');return false;" class="tag-decoration">nightly</div><div id="tag14721" onclick="CopyToClipboard('tag14721');return false;" class="tag-decoration">nightly-3cad3df</div><div id="tag12682" onclick="CopyToClipboard('tag12682');return false;" class="tag-decoration">nightly-93546e5b7ab681339d53199b2e350e67dbfa0969</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/3cad3df1ddab5371dc623286b5ee28db48143721" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32779502532" target="_blank">2026-08-24 21:26:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11594" onclick="CopyToClipboard('tag11594');return false;" class="tag-decoration">release</div><div id="tag31179" onclick="CopyToClipboard('tag31179');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag128" onclick="CopyToClipboard('tag128');return false;" class="tag-decoration">release-5.1.1</div><div id="tag8021" onclick="CopyToClipboard('tag8021');return false;" class="tag-decoration">release-v5</div><div id="tag13121" onclick="CopyToClipboard('tag13121');return false;" class="tag-decoration">release-v5.1</div><div id="tag30272" onclick="CopyToClipboard('tag30272');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag26179" onclick="CopyToClipboard('tag26179');return false;" class="tag-decoration">testing</div><div id="tag28691" onclick="CopyToClipboard('tag28691');return false;" class="tag-decoration">testing-f806ed8</div><div id="tag26178" onclick="CopyToClipboard('tag26178');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag29491" onclick="CopyToClipboard('tag29491');return false;" class="tag-decoration">testing-v5</div><div id="tag28869" onclick="CopyToClipboard('tag28869');return false;" class="tag-decoration">testing-v5.1</div><div id="tag4803" onclick="CopyToClipboard('tag4803');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f806ed8c7c8bfadb7a20227f55fa33f0a842f3bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380901044" target="_blank">2026-08-20 14:34:00</a></td></tr>
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
