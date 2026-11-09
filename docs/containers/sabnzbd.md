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
<tr><td><div id="tag14363" onclick="CopyToClipboard('tag14363');return false;" class="tag-decoration">nightly</div><div id="tag7545" onclick="CopyToClipboard('tag7545');return false;" class="tag-decoration">nightly-1782ec5</div><div id="tag10706" onclick="CopyToClipboard('tag10706');return false;" class="tag-decoration">nightly-c2b05c3e946f7620dd6e3d2d137d2fae99e81183</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1782ec54af1d7aedd003facc0d4043bb20a3fb0a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42692727686" target="_blank">2026-11-09 20:24:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9473" onclick="CopyToClipboard('tag9473');return false;" class="tag-decoration">release</div><div id="tag18832" onclick="CopyToClipboard('tag18832');return false;" class="tag-decoration">release-40a6750</div><div id="tag10757" onclick="CopyToClipboard('tag10757');return false;" class="tag-decoration">release-5.1.3</div><div id="tag617" onclick="CopyToClipboard('tag617');return false;" class="tag-decoration">release-v5</div><div id="tag12569" onclick="CopyToClipboard('tag12569');return false;" class="tag-decoration">release-v5.1</div><div id="tag27654" onclick="CopyToClipboard('tag27654');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag3859" onclick="CopyToClipboard('tag3859');return false;" class="tag-decoration">testing</div><div id="tag19323" onclick="CopyToClipboard('tag19323');return false;" class="tag-decoration">testing-2278da4</div><div id="tag24238" onclick="CopyToClipboard('tag24238');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2278da40a541e22091045c73206eecc9b5d4d908" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325025099" target="_blank">2026-11-07 01:37:04</a></td></tr>
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
