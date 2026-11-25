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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32154" onclick="CopyToClipboard('tag32154');return false;" class="tag-decoration">release</div><div id="tag9219" onclick="CopyToClipboard('tag9219');return false;" class="tag-decoration">release-e13235b</div><div id="tag26852" onclick="CopyToClipboard('tag26852');return false;" class="tag-decoration">release-2.19.1</div><div id="tag25038" onclick="CopyToClipboard('tag25038');return false;" class="tag-decoration">release-v2</div><div id="tag30375" onclick="CopyToClipboard('tag30375');return false;" class="tag-decoration">release-v2.19</div><div id="tag3726" onclick="CopyToClipboard('tag3726');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/e13235b592bf7017687c2f112286c3b63868a9cc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45551173049" target="_blank">2026-11-25 05:05:35</a></td></tr>
<tr><td><div id="tag31431" onclick="CopyToClipboard('tag31431');return false;" class="tag-decoration">testing</div><div id="tag28216" onclick="CopyToClipboard('tag28216');return false;" class="tag-decoration">testing-c5a0198</div><div id="tag21705" onclick="CopyToClipboard('tag21705');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag22548" onclick="CopyToClipboard('tag22548');return false;" class="tag-decoration">testing-v2</div><div id="tag23700" onclick="CopyToClipboard('tag23700');return false;" class="tag-decoration">testing-v2.19</div><div id="tag6847" onclick="CopyToClipboard('tag6847');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/c5a0198557aa5a5de2afe7932939b9e917655554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45551173055" target="_blank">2026-11-25 05:05:35</a></td></tr>
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
