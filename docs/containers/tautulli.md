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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28075" onclick="CopyToClipboard('tag28075');return false;" class="tag-decoration">release</div><div id="tag14219" onclick="CopyToClipboard('tag14219');return false;" class="tag-decoration">release-61e22a2</div><div id="tag801" onclick="CopyToClipboard('tag801');return false;" class="tag-decoration">release-2.16.0</div><div id="tag8649" onclick="CopyToClipboard('tag8649');return false;" class="tag-decoration">release-v2</div><div id="tag17572" onclick="CopyToClipboard('tag17572');return false;" class="tag-decoration">release-v2.16</div><div id="tag15599" onclick="CopyToClipboard('tag15599');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/61e22a29df8b75e0700d184a58bd7cd28da96a9b" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21200279331" target="_blank">2026-01-21 06:58:23</a></td></tr>
<tr><td><div id="tag3298" onclick="CopyToClipboard('tag3298');return false;" class="tag-decoration">testing</div><div id="tag23343" onclick="CopyToClipboard('tag23343');return false;" class="tag-decoration">testing-81e0a3f</div><div id="tag20846" onclick="CopyToClipboard('tag20846');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag5489" onclick="CopyToClipboard('tag5489');return false;" class="tag-decoration">testing-v2</div><div id="tag17595" onclick="CopyToClipboard('tag17595');return false;" class="tag-decoration">testing-v2.16</div><div id="tag20454" onclick="CopyToClipboard('tag20454');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/81e0a3fea0ad404655052157848c50de4d3438af" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21200279874" target="_blank">2026-01-21 06:58:24</a></td></tr>
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
