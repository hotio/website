---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11366" onclick="CopyToClipboard('tag11366');return false;" class="tag-decoration">release</div><div id="tag11787" onclick="CopyToClipboard('tag11787');return false;" class="tag-decoration">release-2183b24</div><div id="tag13506" onclick="CopyToClipboard('tag13506');return false;" class="tag-decoration">release-2.17.2</div><div id="tag14196" onclick="CopyToClipboard('tag14196');return false;" class="tag-decoration">release-v2</div><div id="tag10412" onclick="CopyToClipboard('tag10412');return false;" class="tag-decoration">release-v2.17</div><div id="tag18249" onclick="CopyToClipboard('tag18249');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/2183b2453df0d930ddd3eb9f2cf71298d5c557a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/31876453805" target="_blank">2026-08-15 09:13:30</a></td></tr>
<tr><td><div id="tag26341" onclick="CopyToClipboard('tag26341');return false;" class="tag-decoration">testing</div><div id="tag30045" onclick="CopyToClipboard('tag30045');return false;" class="tag-decoration">testing-76d8f9a</div><div id="tag32489" onclick="CopyToClipboard('tag32489');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag20558" onclick="CopyToClipboard('tag20558');return false;" class="tag-decoration">testing-v2</div><div id="tag18554" onclick="CopyToClipboard('tag18554');return false;" class="tag-decoration">testing-v2.17</div><div id="tag2190" onclick="CopyToClipboard('tag2190');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/76d8f9a0edb7926b68cb69d5475ee5caa352b1c7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/31876454373" target="_blank">2026-08-15 09:13:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
