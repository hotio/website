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
<tr><td><div id="tag16705" onclick="CopyToClipboard('tag16705');return false;" class="tag-decoration">nightly</div><div id="tag6793" onclick="CopyToClipboard('tag6793');return false;" class="tag-decoration">nightly-73e65f5</div><div id="tag147" onclick="CopyToClipboard('tag147');return false;" class="tag-decoration">nightly-cf14e24036c8d5cf1085fd24e3d899d4eb84e7b8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/73e65f58cab00dd9601997801e8cc006f9f0e236" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21060550875" target="_blank">2026-01-16 08:33:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22759" onclick="CopyToClipboard('tag22759');return false;" class="tag-decoration">release</div><div id="tag28823" onclick="CopyToClipboard('tag28823');return false;" class="tag-decoration">release-2b4cd28</div><div id="tag13434" onclick="CopyToClipboard('tag13434');return false;" class="tag-decoration">release-4.5.5</div><div id="tag28536" onclick="CopyToClipboard('tag28536');return false;" class="tag-decoration">release-v4</div><div id="tag28214" onclick="CopyToClipboard('tag28214');return false;" class="tag-decoration">release-v4.5</div><div id="tag32566" onclick="CopyToClipboard('tag32566');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b4cd28887e5bbac85dbbd0864f8998f04cb354c" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21060551602" target="_blank">2026-01-16 08:34:00</a></td></tr>
<tr><td><div id="tag13740" onclick="CopyToClipboard('tag13740');return false;" class="tag-decoration">testing</div><div id="tag12891" onclick="CopyToClipboard('tag12891');return false;" class="tag-decoration">testing-ae2a63a</div><div id="tag26463" onclick="CopyToClipboard('tag26463');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ae2a63a66993dd626f865582e33d8d19876a27c2" target="_blank">Upstream update: alpinevpn-9c717da => alpinevpn-e7368e6</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21059655979" target="_blank">2026-01-16 07:55:41</a></td></tr>
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
