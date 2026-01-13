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
<tr><td><div id="tag8223" onclick="CopyToClipboard('tag8223');return false;" class="tag-decoration">nightly</div><div id="tag19410" onclick="CopyToClipboard('tag19410');return false;" class="tag-decoration">nightly-cab69fa</div><div id="tag29286" onclick="CopyToClipboard('tag29286');return false;" class="tag-decoration">nightly-d21a1119932896c1f7fea1b804e99c70f05dbd19</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cab69fa5a75c719aa2843c719387beae2882ca6a" target="_blank">Version update: d21a1119932896c1f7fea1b804e99c70f05dbd19 => d21a1119932896c1f7fea1b804e99c70f05dbd19</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20950121382" target="_blank">2026-01-13 08:37:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5620" onclick="CopyToClipboard('tag5620');return false;" class="tag-decoration">release</div><div id="tag16286" onclick="CopyToClipboard('tag16286');return false;" class="tag-decoration">release-dc3486b</div><div id="tag4225" onclick="CopyToClipboard('tag4225');return false;" class="tag-decoration">release-4.5.5</div><div id="tag19025" onclick="CopyToClipboard('tag19025');return false;" class="tag-decoration">release-v4</div><div id="tag15915" onclick="CopyToClipboard('tag15915');return false;" class="tag-decoration">release-v4.5</div><div id="tag26227" onclick="CopyToClipboard('tag26227');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/dc3486bb2b0c28e260c3456a5552ae719b412f72" target="_blank">Version update: 4.5.5 => 4.5.5</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20950121724" target="_blank">2026-01-13 08:37:50</a></td></tr>
<tr><td><div id="tag8368" onclick="CopyToClipboard('tag8368');return false;" class="tag-decoration">testing</div><div id="tag32380" onclick="CopyToClipboard('tag32380');return false;" class="tag-decoration">testing-1fb9b04</div><div id="tag13834" onclick="CopyToClipboard('tag13834');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1fb9b04462443b96fab6df0407ac98e2a1acdafd" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20898166217" target="_blank">2026-01-11 16:17:46</a></td></tr>
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
