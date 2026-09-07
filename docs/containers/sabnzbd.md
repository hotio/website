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
<tr><td><div id="tag2631" onclick="CopyToClipboard('tag2631');return false;" class="tag-decoration">nightly</div><div id="tag22841" onclick="CopyToClipboard('tag22841');return false;" class="tag-decoration">nightly-8a5a9e6</div><div id="tag14215" onclick="CopyToClipboard('tag14215');return false;" class="tag-decoration">nightly-d3f691e695f9c3a2065c9fc12eb22731ec30c673</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/8a5a9e6453e1ffaea5da34f931cbe574b704545d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34099235626" target="_blank">2026-09-07 08:10:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12360" onclick="CopyToClipboard('tag12360');return false;" class="tag-decoration">release</div><div id="tag4496" onclick="CopyToClipboard('tag4496');return false;" class="tag-decoration">release-9bf10b0</div><div id="tag20818" onclick="CopyToClipboard('tag20818');return false;" class="tag-decoration">release-5.1.2</div><div id="tag30181" onclick="CopyToClipboard('tag30181');return false;" class="tag-decoration">release-v5</div><div id="tag29283" onclick="CopyToClipboard('tag29283');return false;" class="tag-decoration">release-v5.1</div><div id="tag26718" onclick="CopyToClipboard('tag26718');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9bf10b071d47b3583e6a32b1234b1090a71c5612" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33910423702" target="_blank">2026-09-04 19:17:44</a></td></tr>
<tr><td><div id="tag10600" onclick="CopyToClipboard('tag10600');return false;" class="tag-decoration">testing</div><div id="tag31593" onclick="CopyToClipboard('tag31593');return false;" class="tag-decoration">testing-83250c7</div><div id="tag10825" onclick="CopyToClipboard('tag10825');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag29180" onclick="CopyToClipboard('tag29180');return false;" class="tag-decoration">testing-v5</div><div id="tag32483" onclick="CopyToClipboard('tag32483');return false;" class="tag-decoration">testing-v5.1</div><div id="tag3246" onclick="CopyToClipboard('tag3246');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83250c75a3e3a155345ab15df19201bdc2622892" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33910423620" target="_blank">2026-09-04 19:17:44</a></td></tr>
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
