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
<tr><td><div id="tag15239" onclick="CopyToClipboard('tag15239');return false;" class="tag-decoration">nightly</div><div id="tag14803" onclick="CopyToClipboard('tag14803');return false;" class="tag-decoration">nightly-9243d76</div><div id="tag18110" onclick="CopyToClipboard('tag18110');return false;" class="tag-decoration">nightly-2.5.0.5443</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/9243d766ae9284c9e532bcdf35081e6b7df0ed21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28308911958" target="_blank">2026-06-28 02:31:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32542" onclick="CopyToClipboard('tag32542');return false;" class="tag-decoration">release</div><div id="tag15210" onclick="CopyToClipboard('tag15210');return false;" class="tag-decoration">release-cc3fa59</div><div id="tag20190" onclick="CopyToClipboard('tag20190');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/cc3fa5983f1182168784e5f0556f4aeb5448d1dc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/27982154251" target="_blank">2026-06-22 20:33:54</a></td></tr>
<tr><td><div id="tag2642" onclick="CopyToClipboard('tag2642');return false;" class="tag-decoration">testing</div><div id="tag11089" onclick="CopyToClipboard('tag11089');return false;" class="tag-decoration">testing-7f08119</div><div id="tag117" onclick="CopyToClipboard('tag117');return false;" class="tag-decoration">testing-2.5.0.5422</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/7f081199611ff6ef305cdf3e6c978c2a00f6fe91" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28314380184" target="_blank">2026-06-28 06:54:25</a></td></tr>
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
