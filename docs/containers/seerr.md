---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21453" onclick="CopyToClipboard('tag21453');return false;" class="tag-decoration">nightly</div><div id="tag21677" onclick="CopyToClipboard('tag21677');return false;" class="tag-decoration">nightly-994af80</div><div id="tag26147" onclick="CopyToClipboard('tag26147');return false;" class="tag-decoration">nightly-a2d1e1b06fe82ba4ee731e36b0d12ba14e0fea27</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/994af809dc7a87c7f1da4f733d6125de401857ee" target="_blank">Version update: e086081b19d65c463d0993e0660bd0524367aaa0 => a2d1e1b06fe82ba4ee731e36b0d12ba14e0fea27</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22503700824" target="_blank">2026-02-27 21:03:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22807" onclick="CopyToClipboard('tag22807');return false;" class="tag-decoration">release</div><div id="tag14949" onclick="CopyToClipboard('tag14949');return false;" class="tag-decoration">release-61e4a12</div><div id="tag5108" onclick="CopyToClipboard('tag5108');return false;" class="tag-decoration">release-3.1.0</div><div id="tag6880" onclick="CopyToClipboard('tag6880');return false;" class="tag-decoration">release-v3</div><div id="tag18738" onclick="CopyToClipboard('tag18738');return false;" class="tag-decoration">release-v3.1</div><div id="tag29971" onclick="CopyToClipboard('tag29971');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
