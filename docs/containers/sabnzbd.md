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
<tr><td><div id="tag24462" onclick="CopyToClipboard('tag24462');return false;" class="tag-decoration">nightly</div><div id="tag15902" onclick="CopyToClipboard('tag15902');return false;" class="tag-decoration">nightly-5927c21</div><div id="tag26284" onclick="CopyToClipboard('tag26284');return false;" class="tag-decoration">nightly-adde7b961cdc21bfd43b4221209c895d8c788e8c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5927c21607f4d68abacf38773ee1be94fb7338b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693990" target="_blank">2026-08-18 13:40:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21248" onclick="CopyToClipboard('tag21248');return false;" class="tag-decoration">release</div><div id="tag10734" onclick="CopyToClipboard('tag10734');return false;" class="tag-decoration">release-b37b600</div><div id="tag13928" onclick="CopyToClipboard('tag13928');return false;" class="tag-decoration">release-5.1.0</div><div id="tag23480" onclick="CopyToClipboard('tag23480');return false;" class="tag-decoration">release-v5</div><div id="tag468" onclick="CopyToClipboard('tag468');return false;" class="tag-decoration">release-v5.1</div><div id="tag18084" onclick="CopyToClipboard('tag18084');return false;" class="tag-decoration">release-v5.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b37b6003888cac09b43b7a9ff0f1941f5b7ceebe" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143713096" target="_blank">2026-08-18 13:40:12</a></td></tr>
<tr><td><div id="tag29390" onclick="CopyToClipboard('tag29390');return false;" class="tag-decoration">testing</div><div id="tag3022" onclick="CopyToClipboard('tag3022');return false;" class="tag-decoration">testing-45877d4</div><div id="tag5679" onclick="CopyToClipboard('tag5679');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag18172" onclick="CopyToClipboard('tag18172');return false;" class="tag-decoration">testing-v5</div><div id="tag11578" onclick="CopyToClipboard('tag11578');return false;" class="tag-decoration">testing-v5.1</div><div id="tag4980" onclick="CopyToClipboard('tag4980');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/45877d4160f2df64f9710096b3d3dd94e1f2f992" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32143693852" target="_blank">2026-08-18 13:40:00</a></td></tr>
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
