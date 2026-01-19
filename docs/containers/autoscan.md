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
<tr><td><div id="tag8547" onclick="CopyToClipboard('tag8547');return false;" class="tag-decoration">nightly</div><div id="tag18220" onclick="CopyToClipboard('tag18220');return false;" class="tag-decoration">nightly-627bc4c</div><div id="tag26592" onclick="CopyToClipboard('tag26592');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/627bc4ccb6a674e342011ae9d2a26fdd0e5ebdd3" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21124030884" target="_blank">2026-01-19 03:12:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28510" onclick="CopyToClipboard('tag28510');return false;" class="tag-decoration">release</div><div id="tag16329" onclick="CopyToClipboard('tag16329');return false;" class="tag-decoration">release-af1fb8b</div><div id="tag5030" onclick="CopyToClipboard('tag5030');return false;" class="tag-decoration">release-1.4.0</div><div id="tag30046" onclick="CopyToClipboard('tag30046');return false;" class="tag-decoration">release-v1</div><div id="tag9067" onclick="CopyToClipboard('tag9067');return false;" class="tag-decoration">release-v1.4</div><div id="tag10590" onclick="CopyToClipboard('tag10590');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/af1fb8b851cbe462e7ccbd9ed34bd87b8f75f5e8" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21113691320" target="_blank">2026-01-18 14:56:40</a></td></tr>
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
