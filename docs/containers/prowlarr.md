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
<tr><td><div id="tag612" onclick="CopyToClipboard('tag612');return false;" class="tag-decoration">nightly</div><div id="tag17693" onclick="CopyToClipboard('tag17693');return false;" class="tag-decoration">nightly-ba9fcd9</div><div id="tag13579" onclick="CopyToClipboard('tag13579');return false;" class="tag-decoration">nightly-2.3.3.5279</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ba9fcd9242b4618c90af93ed2663feed023fa938" target="_blank">Version update: 2.3.2.5270 => 2.3.3.5279</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/22024919369" target="_blank">2026-02-14 21:57:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6858" onclick="CopyToClipboard('tag6858');return false;" class="tag-decoration">release</div><div id="tag11551" onclick="CopyToClipboard('tag11551');return false;" class="tag-decoration">release-2c583e5</div><div id="tag18341" onclick="CopyToClipboard('tag18341');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/2c583e5270ea15fcc47be33b6687090b24d59596" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21428855706" target="_blank">2026-01-28 07:14:55</a></td></tr>
<tr><td><div id="tag5209" onclick="CopyToClipboard('tag5209');return false;" class="tag-decoration">testing</div><div id="tag11334" onclick="CopyToClipboard('tag11334');return false;" class="tag-decoration">testing-56a4a33</div><div id="tag15666" onclick="CopyToClipboard('tag15666');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/56a4a332eb5513c4383b383d74f616491ebe6bc6" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21428856835" target="_blank">2026-01-28 07:14:57</a></td></tr>
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
