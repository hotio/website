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
<tr><td><div id="tag29567" onclick="CopyToClipboard('tag29567');return false;" class="tag-decoration">nightly</div><div id="tag19735" onclick="CopyToClipboard('tag19735');return false;" class="tag-decoration">nightly-fbd4e3b</div><div id="tag28841" onclick="CopyToClipboard('tag28841');return false;" class="tag-decoration">nightly-bf412371358ed3773c5f0fff65400c9d1547bdc9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fbd4e3ba6a5d0589b855b13dd8d2c6ae92923eba" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21132234274" target="_blank">2026-01-19 09:31:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5224" onclick="CopyToClipboard('tag5224');return false;" class="tag-decoration">release</div><div id="tag18317" onclick="CopyToClipboard('tag18317');return false;" class="tag-decoration">release-9cc69c6</div><div id="tag18052" onclick="CopyToClipboard('tag18052');return false;" class="tag-decoration">release-4.5.5</div><div id="tag22474" onclick="CopyToClipboard('tag22474');return false;" class="tag-decoration">release-v4</div><div id="tag26558" onclick="CopyToClipboard('tag26558');return false;" class="tag-decoration">release-v4.5</div><div id="tag24937" onclick="CopyToClipboard('tag24937');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9cc69c6abe0138b46056ece77383b8c383c64795" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21124051146" target="_blank">2026-01-19 03:14:02</a></td></tr>
<tr><td><div id="tag2106" onclick="CopyToClipboard('tag2106');return false;" class="tag-decoration">testing</div><div id="tag16547" onclick="CopyToClipboard('tag16547');return false;" class="tag-decoration">testing-66785f9</div><div id="tag8191" onclick="CopyToClipboard('tag8191');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/66785f9b7dd592ef27b8a2e4e6ef4bcf83cc1f70" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21124051825" target="_blank">2026-01-19 03:14:04</a></td></tr>
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
