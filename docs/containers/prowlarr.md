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
<tr><td><div id="tag8238" onclick="CopyToClipboard('tag8238');return false;" class="tag-decoration">nightly</div><div id="tag16263" onclick="CopyToClipboard('tag16263');return false;" class="tag-decoration">nightly-13dc301</div><div id="tag19074" onclick="CopyToClipboard('tag19074');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/13dc301576d3ab668d043a9e4694a67f16d62ce2" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21322454698" target="_blank">2026-01-24 22:14:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4721" onclick="CopyToClipboard('tag4721');return false;" class="tag-decoration">release</div><div id="tag26289" onclick="CopyToClipboard('tag26289');return false;" class="tag-decoration">release-7d15eb5</div><div id="tag2645" onclick="CopyToClipboard('tag2645');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/7d15eb5d3b9d90b9bbe722403eea4cd7bd48e996" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21246762617" target="_blank">2026-01-22 11:29:19</a></td></tr>
<tr><td><div id="tag24977" onclick="CopyToClipboard('tag24977');return false;" class="tag-decoration">testing</div><div id="tag10939" onclick="CopyToClipboard('tag10939');return false;" class="tag-decoration">testing-edaf640</div><div id="tag13674" onclick="CopyToClipboard('tag13674');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/edaf640138e98057dd8fa6b38de1f5f5d364028c" target="_blank">Upstream update: alpinevpn-3f254df => alpinevpn-d7cd40a</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21322455565" target="_blank">2026-01-24 22:14:47</a></td></tr>
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
