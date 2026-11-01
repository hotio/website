---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag1326" onclick="CopyToClipboard('tag1326');return false;" class="tag-decoration">nightly</div><div id="tag14731" onclick="CopyToClipboard('tag14731');return false;" class="tag-decoration">nightly-5f71832</div><div id="tag12248" onclick="CopyToClipboard('tag12248');return false;" class="tag-decoration">nightly-dca1af6af26312ec13ffb4920e5dd948049962ad</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/5f71832e415c71aa72816b1b9121002145eea42d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/41276365420" target="_blank">2026-11-01 05:17:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13966" onclick="CopyToClipboard('tag13966');return false;" class="tag-decoration">release</div><div id="tag27233" onclick="CopyToClipboard('tag27233');return false;" class="tag-decoration">release-8291de7</div><div id="tag1805" onclick="CopyToClipboard('tag1805');return false;" class="tag-decoration">release-3.5.1</div><div id="tag32552" onclick="CopyToClipboard('tag32552');return false;" class="tag-decoration">release-v3</div><div id="tag20115" onclick="CopyToClipboard('tag20115');return false;" class="tag-decoration">release-v3.5</div><div id="tag21030" onclick="CopyToClipboard('tag21030');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8291de7335d41034faa4c7744213493552048bb2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/40573669915" target="_blank">2026-10-27 19:57:01</a></td></tr>
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
