---
hide:
  - toc
title: hotio/autoscan
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/autoscan){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/autoscan){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/cloudbox/autoscan){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13779" onclick="CopyToClipboard('tag13779');return false;" class="tag-decoration">nightly</div><div id="tag25765" onclick="CopyToClipboard('tag25765');return false;" class="tag-decoration">nightly-030a28e</div><div id="tag17088" onclick="CopyToClipboard('tag17088');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/030a28eaee3bb31b7d641ddd06d3e43a089a1615" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/29680836312" target="_blank">2026-07-19 09:01:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1725" onclick="CopyToClipboard('tag1725');return false;" class="tag-decoration">release</div><div id="tag21189" onclick="CopyToClipboard('tag21189');return false;" class="tag-decoration">release-63b1d21</div><div id="tag5773" onclick="CopyToClipboard('tag5773');return false;" class="tag-decoration">release-1.4.0</div><div id="tag26878" onclick="CopyToClipboard('tag26878');return false;" class="tag-decoration">release-v1</div><div id="tag17337" onclick="CopyToClipboard('tag17337');return false;" class="tag-decoration">release-v1.4</div><div id="tag4837" onclick="CopyToClipboard('tag4837');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/63b1d214c15778b9fe9b25c2615de71147e8a034" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/29680631194" target="_blank">2026-07-19 08:54:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="autoscan" \
        -p 3030:3030 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="3030/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      autoscan:
        container_name: autoscan
        image: ghcr.io/hotio/autoscan
        ports:
          - "3030:3030"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=3030/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
