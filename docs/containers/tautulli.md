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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28188" onclick="CopyToClipboard('tag28188');return false;" class="tag-decoration">release</div><div id="tag23729" onclick="CopyToClipboard('tag23729');return false;" class="tag-decoration">release-66c1f08</div><div id="tag5135" onclick="CopyToClipboard('tag5135');return false;" class="tag-decoration">release-2.16.0</div><div id="tag13474" onclick="CopyToClipboard('tag13474');return false;" class="tag-decoration">release-v2</div><div id="tag7930" onclick="CopyToClipboard('tag7930');return false;" class="tag-decoration">release-v2.16</div><div id="tag23814" onclick="CopyToClipboard('tag23814');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/66c1f08d4687a340554579e4843d8aec3cce8736" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21325108855" target="_blank">2026-01-25 01:56:02</a></td></tr>
<tr><td><div id="tag12324" onclick="CopyToClipboard('tag12324');return false;" class="tag-decoration">testing</div><div id="tag4342" onclick="CopyToClipboard('tag4342');return false;" class="tag-decoration">testing-9a3b0bb</div><div id="tag3665" onclick="CopyToClipboard('tag3665');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag18162" onclick="CopyToClipboard('tag18162');return false;" class="tag-decoration">testing-v2</div><div id="tag4487" onclick="CopyToClipboard('tag4487');return false;" class="tag-decoration">testing-v2.16</div><div id="tag25291" onclick="CopyToClipboard('tag25291');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/9a3b0bba3b4ea9756fa61fc8eb6ee30b945b11fb" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21325109080" target="_blank">2026-01-25 01:56:03</a></td></tr>
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
