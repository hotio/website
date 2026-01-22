---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14892" onclick="CopyToClipboard('tag14892');return false;" class="tag-decoration">nightly</div><div id="tag23464" onclick="CopyToClipboard('tag23464');return false;" class="tag-decoration">nightly-bbb4948</div><div id="tag2190" onclick="CopyToClipboard('tag2190');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/bbb4948e4321cd99f4261657ba9fa6ba2f97e8e8" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21243855041" target="_blank">2026-01-22 09:51:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19209" onclick="CopyToClipboard('tag19209');return false;" class="tag-decoration">release</div><div id="tag16297" onclick="CopyToClipboard('tag16297');return false;" class="tag-decoration">release-169fbb3</div><div id="tag3229" onclick="CopyToClipboard('tag3229');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/169fbb36aac722a90a314a440a7754e8d5ff675a" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21237948483" target="_blank">2026-01-22 06:03:09</a></td></tr>
<tr><td><div id="tag2311" onclick="CopyToClipboard('tag2311');return false;" class="tag-decoration">testing</div><div id="tag19819" onclick="CopyToClipboard('tag19819');return false;" class="tag-decoration">testing-1156d79</div><div id="tag26560" onclick="CopyToClipboard('tag26560');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/1156d797e34b9fff949c6908244a5961507840b2" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21243857556" target="_blank">2026-01-22 09:51:42</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
