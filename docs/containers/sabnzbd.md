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
<tr><td><div id="tag14732" onclick="CopyToClipboard('tag14732');return false;" class="tag-decoration">nightly</div><div id="tag24306" onclick="CopyToClipboard('tag24306');return false;" class="tag-decoration">nightly-a3ebc86</div><div id="tag28645" onclick="CopyToClipboard('tag28645');return false;" class="tag-decoration">nightly-611dfa74d2ad85a3cfa451748f0b6702f7007fe1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a3ebc866800e7b8fb82519401aec5cdbdf201e28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32349604959" target="_blank">2026-08-20 08:35:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21718" onclick="CopyToClipboard('tag21718');return false;" class="tag-decoration">release</div><div id="tag26518" onclick="CopyToClipboard('tag26518');return false;" class="tag-decoration">release-d1ec40d</div><div id="tag27001" onclick="CopyToClipboard('tag27001');return false;" class="tag-decoration">release-5.1.1</div><div id="tag12906" onclick="CopyToClipboard('tag12906');return false;" class="tag-decoration">release-v5</div><div id="tag29944" onclick="CopyToClipboard('tag29944');return false;" class="tag-decoration">release-v5.1</div><div id="tag32745" onclick="CopyToClipboard('tag32745');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d1ec40deea24d8ed43de21cf8878d6584889c540" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326358859" target="_blank">2026-08-20 02:55:12</a></td></tr>
<tr><td><div id="tag9733" onclick="CopyToClipboard('tag9733');return false;" class="tag-decoration">testing</div><div id="tag954" onclick="CopyToClipboard('tag954');return false;" class="tag-decoration">testing-2c7dbfe</div><div id="tag1854" onclick="CopyToClipboard('tag1854');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag11432" onclick="CopyToClipboard('tag11432');return false;" class="tag-decoration">testing-v5</div><div id="tag24280" onclick="CopyToClipboard('tag24280');return false;" class="tag-decoration">testing-v5.1</div><div id="tag4023" onclick="CopyToClipboard('tag4023');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c7dbfe018961baaa831a13dda7f5259801fdc01" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326359975" target="_blank">2026-08-20 02:55:13</a></td></tr>
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
