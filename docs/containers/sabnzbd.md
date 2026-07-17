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
<tr><td><div id="tag518" onclick="CopyToClipboard('tag518');return false;" class="tag-decoration">nightly</div><div id="tag21657" onclick="CopyToClipboard('tag21657');return false;" class="tag-decoration">nightly-31daf9b</div><div id="tag15107" onclick="CopyToClipboard('tag15107');return false;" class="tag-decoration">nightly-6731da2d68aee212fc717b72abefc6832271dfda</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/31daf9b6c84a00b3e538ca3145ae4d5461e73ec3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29576502845" target="_blank">2026-07-17 11:20:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27064" onclick="CopyToClipboard('tag27064');return false;" class="tag-decoration">release</div><div id="tag21717" onclick="CopyToClipboard('tag21717');return false;" class="tag-decoration">release-a654991</div><div id="tag1116" onclick="CopyToClipboard('tag1116');return false;" class="tag-decoration">release-5.0.4</div><div id="tag27068" onclick="CopyToClipboard('tag27068');return false;" class="tag-decoration">release-v5</div><div id="tag27960" onclick="CopyToClipboard('tag27960');return false;" class="tag-decoration">release-v5.0</div><div id="tag24026" onclick="CopyToClipboard('tag24026');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a654991219ca33c9c90afb07e02a79ab463d3f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29364644895" target="_blank">2026-07-14 20:09:59</a></td></tr>
<tr><td><div id="tag9970" onclick="CopyToClipboard('tag9970');return false;" class="tag-decoration">testing</div><div id="tag30650" onclick="CopyToClipboard('tag30650');return false;" class="tag-decoration">testing-a9c5fbe</div><div id="tag27601" onclick="CopyToClipboard('tag27601');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a9c5fbe9449694225530c4eb50b75c6f05176f78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29534052347" target="_blank">2026-07-16 20:55:44</a></td></tr>
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
