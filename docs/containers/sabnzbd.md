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
<tr><td><div id="tag30759" onclick="CopyToClipboard('tag30759');return false;" class="tag-decoration">nightly</div><div id="tag32630" onclick="CopyToClipboard('tag32630');return false;" class="tag-decoration">nightly-a445929</div><div id="tag29960" onclick="CopyToClipboard('tag29960');return false;" class="tag-decoration">nightly-d83df2c6d6fbfb2c6d8779f4382eb5f38b1b631d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/a44592908a73d8eb5660089368a2c00528bd9b2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41494741268" target="_blank">2026-11-02 17:49:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27283" onclick="CopyToClipboard('tag27283');return false;" class="tag-decoration">release</div><div id="tag28513" onclick="CopyToClipboard('tag28513');return false;" class="tag-decoration">release-502fca5</div><div id="tag5929" onclick="CopyToClipboard('tag5929');return false;" class="tag-decoration">release-5.1.3</div><div id="tag28406" onclick="CopyToClipboard('tag28406');return false;" class="tag-decoration">release-v5</div><div id="tag934" onclick="CopyToClipboard('tag934');return false;" class="tag-decoration">release-v5.1</div><div id="tag2470" onclick="CopyToClipboard('tag2470');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/502fca58a886bb3e262209c15c35d02f6562f8da" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41553563806" target="_blank">2026-11-03 00:32:14</a></td></tr>
<tr><td><div id="tag27064" onclick="CopyToClipboard('tag27064');return false;" class="tag-decoration">testing</div><div id="tag9801" onclick="CopyToClipboard('tag9801');return false;" class="tag-decoration">testing-0316fac</div><div id="tag14394" onclick="CopyToClipboard('tag14394');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0316facbb83244ec5efe4b7463753735e2cbb9dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41553569790" target="_blank">2026-11-03 00:32:16</a></td></tr>
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
