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
<tr><td><div id="tag14949" onclick="CopyToClipboard('tag14949');return false;" class="tag-decoration">nightly</div><div id="tag26336" onclick="CopyToClipboard('tag26336');return false;" class="tag-decoration">nightly-0beb1e1</div><div id="tag29409" onclick="CopyToClipboard('tag29409');return false;" class="tag-decoration">nightly-777db2015828fca63582d21b0e756fae21c1d80e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0beb1e1312a30af309e2ea972b31d743803c057b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354556217" target="_blank">2026-06-11 14:35:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3135" onclick="CopyToClipboard('tag3135');return false;" class="tag-decoration">release</div><div id="tag13415" onclick="CopyToClipboard('tag13415');return false;" class="tag-decoration">release-a0ab641</div><div id="tag13161" onclick="CopyToClipboard('tag13161');return false;" class="tag-decoration">release-5.0.4</div><div id="tag3732" onclick="CopyToClipboard('tag3732');return false;" class="tag-decoration">release-v5</div><div id="tag24129" onclick="CopyToClipboard('tag24129');return false;" class="tag-decoration">release-v5.0</div><div id="tag13677" onclick="CopyToClipboard('tag13677');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a0ab641838975e084f5308d638d56e590ba97b58" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554271" target="_blank">2026-06-11 14:35:22</a></td></tr>
<tr><td><div id="tag13921" onclick="CopyToClipboard('tag13921');return false;" class="tag-decoration">testing</div><div id="tag26365" onclick="CopyToClipboard('tag26365');return false;" class="tag-decoration">testing-40b258e</div><div id="tag10051" onclick="CopyToClipboard('tag10051');return false;" class="tag-decoration">testing-5.0.4</div><div id="tag30205" onclick="CopyToClipboard('tag30205');return false;" class="tag-decoration">testing-v5</div><div id="tag25786" onclick="CopyToClipboard('tag25786');return false;" class="tag-decoration">testing-v5.0</div><div id="tag27008" onclick="CopyToClipboard('tag27008');return false;" class="tag-decoration">testing-v5.0.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40b258ed9792f66f6fbd60178369606253b3e84c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27354554352" target="_blank">2026-06-11 14:35:21</a></td></tr>
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
