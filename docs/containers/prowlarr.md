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
<tr><td><div id="tag22560" onclick="CopyToClipboard('tag22560');return false;" class="tag-decoration">nightly</div><div id="tag21584" onclick="CopyToClipboard('tag21584');return false;" class="tag-decoration">nightly-7f1eb50</div><div id="tag22315" onclick="CopyToClipboard('tag22315');return false;" class="tag-decoration">nightly-2.5.0.5443</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7f1eb50ec706b61de254fab46ad72f26d703a8cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28388560704" target="_blank">2026-06-29 16:52:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19956" onclick="CopyToClipboard('tag19956');return false;" class="tag-decoration">release</div><div id="tag28224" onclick="CopyToClipboard('tag28224');return false;" class="tag-decoration">release-db0a125</div><div id="tag1377" onclick="CopyToClipboard('tag1377');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/db0a1258f53bea6f4f01146fdefea930341dd658" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28446404016" target="_blank">2026-06-30 13:03:21</a></td></tr>
<tr><td><div id="tag8521" onclick="CopyToClipboard('tag8521');return false;" class="tag-decoration">testing</div><div id="tag28244" onclick="CopyToClipboard('tag28244');return false;" class="tag-decoration">testing-897ea91</div><div id="tag28998" onclick="CopyToClipboard('tag28998');return false;" class="tag-decoration">testing-2.5.0.5422</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/897ea9128df4050f379a836632c3cbd5db3263ee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28446405464" target="_blank">2026-06-30 13:03:23</a></td></tr>
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
