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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11856" onclick="CopyToClipboard('tag11856');return false;" class="tag-decoration">release</div><div id="tag30623" onclick="CopyToClipboard('tag30623');return false;" class="tag-decoration">release-de82471</div><div id="tag28727" onclick="CopyToClipboard('tag28727');return false;" class="tag-decoration">release-2.16.0</div><div id="tag6322" onclick="CopyToClipboard('tag6322');return false;" class="tag-decoration">release-v2</div><div id="tag28137" onclick="CopyToClipboard('tag28137');return false;" class="tag-decoration">release-v2.16</div><div id="tag31128" onclick="CopyToClipboard('tag31128');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/de824718c6462ca286d63803def4f9bbaa13274e" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21198612273" target="_blank">2026-01-21 05:38:18</a></td></tr>
<tr><td><div id="tag4121" onclick="CopyToClipboard('tag4121');return false;" class="tag-decoration">testing</div><div id="tag8298" onclick="CopyToClipboard('tag8298');return false;" class="tag-decoration">testing-e21b28a</div><div id="tag26084" onclick="CopyToClipboard('tag26084');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag28383" onclick="CopyToClipboard('tag28383');return false;" class="tag-decoration">testing-v2</div><div id="tag15084" onclick="CopyToClipboard('tag15084');return false;" class="tag-decoration">testing-v2.16</div><div id="tag23882" onclick="CopyToClipboard('tag23882');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/e21b28a8ad7fe82dc446549c9c70dc501df26a3d" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21198612925" target="_blank">2026-01-21 05:38:20</a></td></tr>
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
