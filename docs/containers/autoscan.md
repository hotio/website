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
<tr><td><div id="tag197" onclick="CopyToClipboard('tag197');return false;" class="tag-decoration">nightly</div><div id="tag25824" onclick="CopyToClipboard('tag25824');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div><div id="tag5836" onclick="CopyToClipboard('tag5836');return false;" class="tag-decoration">nightly-6bd16ae</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/6bd16aee8327f89b9ff5625e88daafd1a8577483" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20895137724" target="_blank">2026-01-11 12:28:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25157" onclick="CopyToClipboard('tag25157');return false;" class="tag-decoration">release</div><div id="tag23224" onclick="CopyToClipboard('tag23224');return false;" class="tag-decoration">release-1.4.0</div><div id="tag9185" onclick="CopyToClipboard('tag9185');return false;" class="tag-decoration">release-8580691</div><div id="tag19254" onclick="CopyToClipboard('tag19254');return false;" class="tag-decoration">release-v1</div><div id="tag6883" onclick="CopyToClipboard('tag6883');return false;" class="tag-decoration">release-v1.4</div><div id="tag12039" onclick="CopyToClipboard('tag12039');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/8580691042245b4a66eef8472ac500daecfd2f5d" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/20895137868" target="_blank">2026-01-11 12:28:36</a></td></tr>
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
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/autoscan
    ```

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
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
