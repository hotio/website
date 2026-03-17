---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24514" onclick="CopyToClipboard('tag24514');return false;" class="tag-decoration">release</div><div id="tag24999" onclick="CopyToClipboard('tag24999');return false;" class="tag-decoration">release-036e099</div><div id="tag29513" onclick="CopyToClipboard('tag29513');return false;" class="tag-decoration">release-8.5.2</div><div id="tag1203" onclick="CopyToClipboard('tag1203');return false;" class="tag-decoration">release-v8</div><div id="tag20113" onclick="CopyToClipboard('tag20113');return false;" class="tag-decoration">release-v8.5</div><div id="tag28819" onclick="CopyToClipboard('tag28819');return false;" class="tag-decoration">release-v8.5.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/036e099292f591b06cf14b085b2ad980ebc68b4e" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23180607897" target="_blank">2026-03-17 05:54:59</a></td></tr>
<tr><td><div id="tag16019" onclick="CopyToClipboard('tag16019');return false;" class="tag-decoration">testing</div><div id="tag7906" onclick="CopyToClipboard('tag7906');return false;" class="tag-decoration">testing-83bd6ff</div><div id="tag16567" onclick="CopyToClipboard('tag16567');return false;" class="tag-decoration">testing-8.5.2</div><div id="tag11800" onclick="CopyToClipboard('tag11800');return false;" class="tag-decoration">testing-v8</div><div id="tag14209" onclick="CopyToClipboard('tag14209');return false;" class="tag-decoration">testing-v8.5</div><div id="tag7922" onclick="CopyToClipboard('tag7922');return false;" class="tag-decoration">testing-v8.5.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/83bd6ff0b869ce35c1e25d79b1a59ae839bdcf12" target="_blank">Upstream update: noblevpn-c3daa84 => noblevpn-3867c07</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/23180608353" target="_blank">2026-03-17 05:55:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
