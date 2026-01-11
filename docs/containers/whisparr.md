---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3644" onclick="CopyToClipboard('tag3644');return false;" class="tag-decoration">nightly</div><div id="tag5732" onclick="CopyToClipboard('tag5732');return false;" class="tag-decoration">nightly-2.0.0.2081</div><div id="tag14821" onclick="CopyToClipboard('tag14821');return false;" class="tag-decoration">nightly-fa3a1d9</div></td><td>nightly</td><td><a href="https://github.com/hotio/whisparr/commit/fa3a1d9b28124778f98d89254349aeda6adc2e6c" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20892092820" target="_blank">2026-01-11 08:20:11</a></td></tr>
<tr><td><div id="tag6576" onclick="CopyToClipboard('tag6576');return false;" class="tag-decoration">v3</div><div id="tag19908" onclick="CopyToClipboard('tag19908');return false;" class="tag-decoration">v3-3.1.0.2093</div><div id="tag23731" onclick="CopyToClipboard('tag23731');return false;" class="tag-decoration">v3-6b5bcb7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/6b5bcb725de1e1cda9039fae8997ee9a341de619" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/20892093201" target="_blank">2026-01-11 08:20:13</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
