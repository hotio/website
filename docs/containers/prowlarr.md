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
<tr><td><div id="tag9849" onclick="CopyToClipboard('tag9849');return false;" class="tag-decoration">nightly</div><div id="tag32148" onclick="CopyToClipboard('tag32148');return false;" class="tag-decoration">nightly-65b6024</div><div id="tag13580" onclick="CopyToClipboard('tag13580');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/65b6024e4acb7e28e99c1a9892f4705e63268e2a" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21113697247" target="_blank">2026-01-18 14:57:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6456" onclick="CopyToClipboard('tag6456');return false;" class="tag-decoration">release</div><div id="tag28114" onclick="CopyToClipboard('tag28114');return false;" class="tag-decoration">release-07deb02</div><div id="tag17280" onclick="CopyToClipboard('tag17280');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/07deb0207c4349a7f16d78ce4ef76d320bc307b7" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21113697666" target="_blank">2026-01-18 14:57:09</a></td></tr>
<tr><td><div id="tag1467" onclick="CopyToClipboard('tag1467');return false;" class="tag-decoration">testing</div><div id="tag8826" onclick="CopyToClipboard('tag8826');return false;" class="tag-decoration">testing-43c984f</div><div id="tag8507" onclick="CopyToClipboard('tag8507');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/43c984f99171a6ca3c241e09aba9fc0fb15c71c2" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21090394525" target="_blank">2026-01-17 07:01:32</a></td></tr>
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
