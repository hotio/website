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
<tr><td><div id="tag6773" onclick="CopyToClipboard('tag6773');return false;" class="tag-decoration">nightly</div><div id="tag14731" onclick="CopyToClipboard('tag14731');return false;" class="tag-decoration">nightly-ecdcf86</div><div id="tag4248" onclick="CopyToClipboard('tag4248');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ecdcf86372d49c1e020d84a538188e87ce68f5a7" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25708410933" target="_blank">2026-05-12 01:52:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24175" onclick="CopyToClipboard('tag24175');return false;" class="tag-decoration">release</div><div id="tag21362" onclick="CopyToClipboard('tag21362');return false;" class="tag-decoration">release-b5ffab1</div><div id="tag11943" onclick="CopyToClipboard('tag11943');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/b5ffab174ce08be96ba179a5bd877a4a949e3bc4" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25714956090" target="_blank">2026-05-12 05:16:39</a></td></tr>
<tr><td><div id="tag22932" onclick="CopyToClipboard('tag22932');return false;" class="tag-decoration">testing</div><div id="tag6346" onclick="CopyToClipboard('tag6346');return false;" class="tag-decoration">testing-d719b74</div><div id="tag16143" onclick="CopyToClipboard('tag16143');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/d719b744c45d3eca44fadceb08108de4715a4c32" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25714957966" target="_blank">2026-05-12 05:16:43</a></td></tr>
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
