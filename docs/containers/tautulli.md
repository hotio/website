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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17692" onclick="CopyToClipboard('tag17692');return false;" class="tag-decoration">release</div><div id="tag6597" onclick="CopyToClipboard('tag6597');return false;" class="tag-decoration">release-616ec7e</div><div id="tag29802" onclick="CopyToClipboard('tag29802');return false;" class="tag-decoration">release-2.16.0</div><div id="tag7041" onclick="CopyToClipboard('tag7041');return false;" class="tag-decoration">release-v2</div><div id="tag18542" onclick="CopyToClipboard('tag18542');return false;" class="tag-decoration">release-v2.16</div><div id="tag1686" onclick="CopyToClipboard('tag1686');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/616ec7e4c41051bdfe37d7812936e6fd591bff12" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21322464014" target="_blank">2026-01-24 22:15:29</a></td></tr>
<tr><td><div id="tag22090" onclick="CopyToClipboard('tag22090');return false;" class="tag-decoration">testing</div><div id="tag19163" onclick="CopyToClipboard('tag19163');return false;" class="tag-decoration">testing-a3311bc</div><div id="tag18285" onclick="CopyToClipboard('tag18285');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag20444" onclick="CopyToClipboard('tag20444');return false;" class="tag-decoration">testing-v2</div><div id="tag14711" onclick="CopyToClipboard('tag14711');return false;" class="tag-decoration">testing-v2.16</div><div id="tag25326" onclick="CopyToClipboard('tag25326');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a3311bcf5533d1ddc34db5e5c8ca13c08d0859c0" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21322464375" target="_blank">2026-01-24 22:15:30</a></td></tr>
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
