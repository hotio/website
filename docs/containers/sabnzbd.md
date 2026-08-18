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
<tr><td><div id="tag2208" onclick="CopyToClipboard('tag2208');return false;" class="tag-decoration">nightly</div><div id="tag10596" onclick="CopyToClipboard('tag10596');return false;" class="tag-decoration">nightly-5927c21</div><div id="tag11539" onclick="CopyToClipboard('tag11539');return false;" class="tag-decoration">nightly-adde7b961cdc21bfd43b4221209c895d8c788e8c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5927c21607f4d68abacf38773ee1be94fb7338b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693990" target="_blank">2026-08-18 13:40:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11542" onclick="CopyToClipboard('tag11542');return false;" class="tag-decoration">release</div><div id="tag4065" onclick="CopyToClipboard('tag4065');return false;" class="tag-decoration">release-de50765</div><div id="tag26557" onclick="CopyToClipboard('tag26557');return false;" class="tag-decoration">release-5.1.0</div><div id="tag27287" onclick="CopyToClipboard('tag27287');return false;" class="tag-decoration">release-v5</div><div id="tag23322" onclick="CopyToClipboard('tag23322');return false;" class="tag-decoration">release-v5.1</div><div id="tag26963" onclick="CopyToClipboard('tag26963');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/de507655f8c676f2c0bfc110f324037a2a99afc7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31874466766" target="_blank">2026-08-15 08:25:56</a></td></tr>
<tr><td><div id="tag7780" onclick="CopyToClipboard('tag7780');return false;" class="tag-decoration">testing</div><div id="tag14313" onclick="CopyToClipboard('tag14313');return false;" class="tag-decoration">testing-45877d4</div><div id="tag19321" onclick="CopyToClipboard('tag19321');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag23191" onclick="CopyToClipboard('tag23191');return false;" class="tag-decoration">testing-v5</div><div id="tag4148" onclick="CopyToClipboard('tag4148');return false;" class="tag-decoration">testing-v5.1</div><div id="tag12793" onclick="CopyToClipboard('tag12793');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/45877d4160f2df64f9710096b3d3dd94e1f2f992" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693852" target="_blank">2026-08-18 13:40:00</a></td></tr>
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
