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
<tr><td><div id="tag3382" onclick="CopyToClipboard('tag3382');return false;" class="tag-decoration">nightly</div><div id="tag4446" onclick="CopyToClipboard('tag4446');return false;" class="tag-decoration">nightly-5fe06a3</div><div id="tag25749" onclick="CopyToClipboard('tag25749');return false;" class="tag-decoration">nightly-c5556452a6bf26607c769ee3cf747ea1fb1415ae</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/5fe06a3dbd28ffd2f9d511add674ea9237295c21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42893129903" target="_blank">2026-11-10 20:13:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20471" onclick="CopyToClipboard('tag20471');return false;" class="tag-decoration">release</div><div id="tag32512" onclick="CopyToClipboard('tag32512');return false;" class="tag-decoration">release-40a6750</div><div id="tag25590" onclick="CopyToClipboard('tag25590');return false;" class="tag-decoration">release-5.1.3</div><div id="tag8531" onclick="CopyToClipboard('tag8531');return false;" class="tag-decoration">release-v5</div><div id="tag26269" onclick="CopyToClipboard('tag26269');return false;" class="tag-decoration">release-v5.1</div><div id="tag16129" onclick="CopyToClipboard('tag16129');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag10803" onclick="CopyToClipboard('tag10803');return false;" class="tag-decoration">testing</div><div id="tag32625" onclick="CopyToClipboard('tag32625');return false;" class="tag-decoration">testing-46faa76</div><div id="tag4333" onclick="CopyToClipboard('tag4333');return false;" class="tag-decoration">testing-5.2.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/46faa769ced91accd1b5f937af137a89afc87885" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42692723441" target="_blank">2026-11-09 20:24:51</a></td></tr>
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
