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
<tr><td><div id="tag16204" onclick="CopyToClipboard('tag16204');return false;" class="tag-decoration">nightly</div><div id="tag16836" onclick="CopyToClipboard('tag16836');return false;" class="tag-decoration">nightly-e81cafc</div><div id="tag2454" onclick="CopyToClipboard('tag2454');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/e81cafc887afa57758a3d291fcc7d163dd6f1423" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21237934774" target="_blank">2026-01-22 06:02:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9379" onclick="CopyToClipboard('tag9379');return false;" class="tag-decoration">release</div><div id="tag5293" onclick="CopyToClipboard('tag5293');return false;" class="tag-decoration">release-6db7de5</div><div id="tag14053" onclick="CopyToClipboard('tag14053');return false;" class="tag-decoration">release-1.4.0</div><div id="tag11308" onclick="CopyToClipboard('tag11308');return false;" class="tag-decoration">release-v1</div><div id="tag9745" onclick="CopyToClipboard('tag9745');return false;" class="tag-decoration">release-v1.4</div><div id="tag1320" onclick="CopyToClipboard('tag1320');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/6db7de524fc661572f0d7c672a45b01c247b49ca" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-21317cc</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21243334558" target="_blank">2026-01-22 09:34:33</a></td></tr>
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
