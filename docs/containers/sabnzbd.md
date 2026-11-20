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
<tr><td><div id="tag29800" onclick="CopyToClipboard('tag29800');return false;" class="tag-decoration">nightly</div><div id="tag12291" onclick="CopyToClipboard('tag12291');return false;" class="tag-decoration">nightly-8959c2e</div><div id="tag27381" onclick="CopyToClipboard('tag27381');return false;" class="tag-decoration">nightly-7e9252b526cb0d4400924ab23f029c72b62fd4ea</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/8959c2ee1d7c46b4dbc4073c2c00eee9f71d0f53" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44712858183" target="_blank">2026-11-20 09:41:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28185" onclick="CopyToClipboard('tag28185');return false;" class="tag-decoration">release</div><div id="tag18768" onclick="CopyToClipboard('tag18768');return false;" class="tag-decoration">release-40a6750</div><div id="tag2159" onclick="CopyToClipboard('tag2159');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6894" onclick="CopyToClipboard('tag6894');return false;" class="tag-decoration">release-v5</div><div id="tag2309" onclick="CopyToClipboard('tag2309');return false;" class="tag-decoration">release-v5.1</div><div id="tag4357" onclick="CopyToClipboard('tag4357');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/40a675030eb0baedfcf0f588b17c337610d281be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42325022471" target="_blank">2026-11-07 01:37:02</a></td></tr>
<tr><td><div id="tag15369" onclick="CopyToClipboard('tag15369');return false;" class="tag-decoration">testing</div><div id="tag13878" onclick="CopyToClipboard('tag13878');return false;" class="tag-decoration">testing-4e192d8</div><div id="tag13598" onclick="CopyToClipboard('tag13598');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4e192d871748c3fcd096dac8c789091f6d22f70b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/43473428686" target="_blank">2026-11-13 17:30:13</a></td></tr>
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
