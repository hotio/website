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
<tr><td><div id="tag4023" onclick="CopyToClipboard('tag4023');return false;" class="tag-decoration">nightly</div><div id="tag9889" onclick="CopyToClipboard('tag9889');return false;" class="tag-decoration">nightly-06ceaea</div><div id="tag9583" onclick="CopyToClipboard('tag9583');return false;" class="tag-decoration">nightly-1f5d8827f9940c85279e6b447e0e845e61b60229</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/06ceaea48cc45bb6d0a0b0a9c39c9a1b5c2d2473" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568023001" target="_blank">2026-10-27 19:19:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20474" onclick="CopyToClipboard('tag20474');return false;" class="tag-decoration">release</div><div id="tag7137" onclick="CopyToClipboard('tag7137');return false;" class="tag-decoration">release-5cefd36</div><div id="tag5130" onclick="CopyToClipboard('tag5130');return false;" class="tag-decoration">release-5.1.3</div><div id="tag23851" onclick="CopyToClipboard('tag23851');return false;" class="tag-decoration">release-v5</div><div id="tag6776" onclick="CopyToClipboard('tag6776');return false;" class="tag-decoration">release-v5.1</div><div id="tag16573" onclick="CopyToClipboard('tag16573');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cefd36ec5b88cecc0df3c5565d86fe3447dabc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40516835496" target="_blank">2026-10-27 13:58:41</a></td></tr>
<tr><td><div id="tag10477" onclick="CopyToClipboard('tag10477');return false;" class="tag-decoration">testing</div><div id="tag14441" onclick="CopyToClipboard('tag14441');return false;" class="tag-decoration">testing-b267447</div><div id="tag12454" onclick="CopyToClipboard('tag12454');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b2674478b8c45212dc6aed5aef04053d20184607" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40568022947" target="_blank">2026-10-27 19:19:07</a></td></tr>
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
