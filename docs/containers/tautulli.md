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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12387" onclick="CopyToClipboard('tag12387');return false;" class="tag-decoration">release</div><div id="tag3845" onclick="CopyToClipboard('tag3845');return false;" class="tag-decoration">release-d875db4</div><div id="tag9402" onclick="CopyToClipboard('tag9402');return false;" class="tag-decoration">release-2.19.1</div><div id="tag1291" onclick="CopyToClipboard('tag1291');return false;" class="tag-decoration">release-v2</div><div id="tag26428" onclick="CopyToClipboard('tag26428');return false;" class="tag-decoration">release-v2.19</div><div id="tag13653" onclick="CopyToClipboard('tag13653');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/d875db4832dcea6300565431bf0a09d56221f4b0" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/46058560754" target="_blank">2026-11-27 19:42:20</a></td></tr>
<tr><td><div id="tag14475" onclick="CopyToClipboard('tag14475');return false;" class="tag-decoration">testing</div><div id="tag9475" onclick="CopyToClipboard('tag9475');return false;" class="tag-decoration">testing-dd7408d</div><div id="tag12867" onclick="CopyToClipboard('tag12867');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag27713" onclick="CopyToClipboard('tag27713');return false;" class="tag-decoration">testing-v2</div><div id="tag32391" onclick="CopyToClipboard('tag32391');return false;" class="tag-decoration">testing-v2.19</div><div id="tag10957" onclick="CopyToClipboard('tag10957');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/dd7408d3ebc55e5df0b50eb6d83018d0a6637cb8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/46097303513" target="_blank">2026-11-28 02:17:05</a></td></tr>
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
