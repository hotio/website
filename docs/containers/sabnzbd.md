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
<tr><td><div id="tag18435" onclick="CopyToClipboard('tag18435');return false;" class="tag-decoration">nightly</div><div id="tag249" onclick="CopyToClipboard('tag249');return false;" class="tag-decoration">nightly-5927c21</div><div id="tag14259" onclick="CopyToClipboard('tag14259');return false;" class="tag-decoration">nightly-adde7b961cdc21bfd43b4221209c895d8c788e8c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5927c21607f4d68abacf38773ee1be94fb7338b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693990" target="_blank">2026-08-18 13:40:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9421" onclick="CopyToClipboard('tag9421');return false;" class="tag-decoration">release</div><div id="tag17243" onclick="CopyToClipboard('tag17243');return false;" class="tag-decoration">release-db48ce1</div><div id="tag2557" onclick="CopyToClipboard('tag2557');return false;" class="tag-decoration">release-5.1.1</div><div id="tag18409" onclick="CopyToClipboard('tag18409');return false;" class="tag-decoration">release-v5</div><div id="tag26874" onclick="CopyToClipboard('tag26874');return false;" class="tag-decoration">release-v5.1</div><div id="tag32710" onclick="CopyToClipboard('tag32710');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/db48ce174f247fc6d312f708eba8d9847f0ab073" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160512150" target="_blank">2026-08-18 16:28:41</a></td></tr>
<tr><td><div id="tag18731" onclick="CopyToClipboard('tag18731');return false;" class="tag-decoration">testing</div><div id="tag31547" onclick="CopyToClipboard('tag31547');return false;" class="tag-decoration">testing-45877d4</div><div id="tag11309" onclick="CopyToClipboard('tag11309');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag17358" onclick="CopyToClipboard('tag17358');return false;" class="tag-decoration">testing-v5</div><div id="tag15181" onclick="CopyToClipboard('tag15181');return false;" class="tag-decoration">testing-v5.1</div><div id="tag27114" onclick="CopyToClipboard('tag27114');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/45877d4160f2df64f9710096b3d3dd94e1f2f992" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693852" target="_blank">2026-08-18 13:40:00</a></td></tr>
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
