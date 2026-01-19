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
<tr><td><div id="tag22779" onclick="CopyToClipboard('tag22779');return false;" class="tag-decoration">nightly</div><div id="tag22525" onclick="CopyToClipboard('tag22525');return false;" class="tag-decoration">nightly-627bc4c</div><div id="tag7803" onclick="CopyToClipboard('tag7803');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/627bc4ccb6a674e342011ae9d2a26fdd0e5ebdd3" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21124030884" target="_blank">2026-01-19 03:12:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12905" onclick="CopyToClipboard('tag12905');return false;" class="tag-decoration">release</div><div id="tag4868" onclick="CopyToClipboard('tag4868');return false;" class="tag-decoration">release-73bdb35</div><div id="tag13070" onclick="CopyToClipboard('tag13070');return false;" class="tag-decoration">release-1.4.0</div><div id="tag1077" onclick="CopyToClipboard('tag1077');return false;" class="tag-decoration">release-v1</div><div id="tag18856" onclick="CopyToClipboard('tag18856');return false;" class="tag-decoration">release-v1.4</div><div id="tag21955" onclick="CopyToClipboard('tag21955');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/73bdb353741f3f50de964c10ddd249d3e86d2ed0" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/21124031270" target="_blank">2026-01-19 03:12:51</a></td></tr>
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
