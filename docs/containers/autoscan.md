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
<tr><td><div id="tag32054" onclick="CopyToClipboard('tag32054');return false;" class="tag-decoration">nightly</div><div id="tag8426" onclick="CopyToClipboard('tag8426');return false;" class="tag-decoration">nightly-7efa57b</div><div id="tag279" onclick="CopyToClipboard('tag279');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/7efa57be33f4e1410af29d3707c735302c913f37" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/25714883751" target="_blank">2026-05-12 05:14:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16908" onclick="CopyToClipboard('tag16908');return false;" class="tag-decoration">release</div><div id="tag17372" onclick="CopyToClipboard('tag17372');return false;" class="tag-decoration">release-bcfdb10</div><div id="tag26505" onclick="CopyToClipboard('tag26505');return false;" class="tag-decoration">release-1.4.0</div><div id="tag2428" onclick="CopyToClipboard('tag2428');return false;" class="tag-decoration">release-v1</div><div id="tag29523" onclick="CopyToClipboard('tag29523');return false;" class="tag-decoration">release-v1.4</div><div id="tag27406" onclick="CopyToClipboard('tag27406');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/bcfdb10d62cb90af5a580e9c29e6a11ca2f035ed" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/25714884564" target="_blank">2026-05-12 05:14:29</a></td></tr>
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
