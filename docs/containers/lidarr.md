---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23367" onclick="CopyToClipboard('tag23367');return false;" class="tag-decoration">nightly</div><div id="tag25911" onclick="CopyToClipboard('tag25911');return false;" class="tag-decoration">nightly-3.1.2.4902</div><div id="tag21608" onclick="CopyToClipboard('tag21608');return false;" class="tag-decoration">nightly-22df3a3</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/22df3a314a6c63a0f36c65071492260325f217dd" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20895140594" target="_blank">2026-01-11 12:28:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9694" onclick="CopyToClipboard('tag9694');return false;" class="tag-decoration">release</div><div id="tag23242" onclick="CopyToClipboard('tag23242');return false;" class="tag-decoration">release-3.1.0.4875</div><div id="tag13150" onclick="CopyToClipboard('tag13150');return false;" class="tag-decoration">release-dc62fce</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/dc62fce7a415eba836927021e5d44f28a75d6f6e" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20898159868" target="_blank">2026-01-11 16:17:18</a></td></tr>
<tr><td><div id="tag12938" onclick="CopyToClipboard('tag12938');return false;" class="tag-decoration">testing</div><div id="tag29595" onclick="CopyToClipboard('tag29595');return false;" class="tag-decoration">testing-3.1.2.4902</div><div id="tag31098" onclick="CopyToClipboard('tag31098');return false;" class="tag-decoration">testing-c217495</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/c2174953e02e8fe28e3ad996945f3e942a7745de" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/20895141142" target="_blank">2026-01-11 12:28:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
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
