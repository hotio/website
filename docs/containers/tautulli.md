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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25587" onclick="CopyToClipboard('tag25587');return false;" class="tag-decoration">release</div><div id="tag18485" onclick="CopyToClipboard('tag18485');return false;" class="tag-decoration">release-ec88d52</div><div id="tag11855" onclick="CopyToClipboard('tag11855');return false;" class="tag-decoration">release-2.17.1</div><div id="tag21637" onclick="CopyToClipboard('tag21637');return false;" class="tag-decoration">release-v2</div><div id="tag12540" onclick="CopyToClipboard('tag12540');return false;" class="tag-decoration">release-v2.17</div><div id="tag21500" onclick="CopyToClipboard('tag21500');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ec88d52bcf7b549f604507a2ff661ecff86cab21" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25707035993" target="_blank">2026-05-12 01:11:07</a></td></tr>
<tr><td><div id="tag4559" onclick="CopyToClipboard('tag4559');return false;" class="tag-decoration">testing</div><div id="tag8728" onclick="CopyToClipboard('tag8728');return false;" class="tag-decoration">testing-ced7460</div><div id="tag8335" onclick="CopyToClipboard('tag8335');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag20594" onclick="CopyToClipboard('tag20594');return false;" class="tag-decoration">testing-v2</div><div id="tag10273" onclick="CopyToClipboard('tag10273');return false;" class="tag-decoration">testing-v2.17</div><div id="tag14876" onclick="CopyToClipboard('tag14876');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/ced746068a1889a7a03f52d0b04650f2c93cd25f" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25707041208" target="_blank">2026-05-12 01:11:15</a></td></tr>
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
