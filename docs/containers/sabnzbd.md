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
<tr><td><div id="tag21984" onclick="CopyToClipboard('tag21984');return false;" class="tag-decoration">nightly</div><div id="tag13134" onclick="CopyToClipboard('tag13134');return false;" class="tag-decoration">nightly-3b8a849</div><div id="tag30487" onclick="CopyToClipboard('tag30487');return false;" class="tag-decoration">nightly-cf5bfa939879bd0873df710222f9f0eefe151177</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/3b8a84953cbaa57e5bd4b9a782e162b969fa3606" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45586496534" target="_blank">2026-11-25 09:33:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21056" onclick="CopyToClipboard('tag21056');return false;" class="tag-decoration">release</div><div id="tag25094" onclick="CopyToClipboard('tag25094');return false;" class="tag-decoration">release-925d2eb</div><div id="tag19509" onclick="CopyToClipboard('tag19509');return false;" class="tag-decoration">release-5.1.3</div><div id="tag17937" onclick="CopyToClipboard('tag17937');return false;" class="tag-decoration">release-v5</div><div id="tag9753" onclick="CopyToClipboard('tag9753');return false;" class="tag-decoration">release-v5.1</div><div id="tag11933" onclick="CopyToClipboard('tag11933');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/925d2ebe3d9e7e26062bc2d2fbf1a307e4cf7147" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45586491129" target="_blank">2026-11-25 09:33:11</a></td></tr>
<tr><td><div id="tag9550" onclick="CopyToClipboard('tag9550');return false;" class="tag-decoration">testing</div><div id="tag6153" onclick="CopyToClipboard('tag6153');return false;" class="tag-decoration">testing-0e34d9d</div><div id="tag19512" onclick="CopyToClipboard('tag19512');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0e34d9db2a051bb295f335176d10ad62247c5dbb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45586499759" target="_blank">2026-11-25 09:33:13</a></td></tr>
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
