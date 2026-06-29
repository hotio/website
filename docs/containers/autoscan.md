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
<tr><td><div id="tag29972" onclick="CopyToClipboard('tag29972');return false;" class="tag-decoration">nightly</div><div id="tag3143" onclick="CopyToClipboard('tag3143');return false;" class="tag-decoration">nightly-eaa58f8</div><div id="tag26112" onclick="CopyToClipboard('tag26112');return false;" class="tag-decoration">nightly-1d41f4b47ede7531ecc24944bfcaf88db10c2ba7</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/autoscan/commit/eaa58f898dac6c5dc4e7c1d031d8b3be5b7a0b3c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/28391157321" target="_blank">2026-06-29 17:37:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3817" onclick="CopyToClipboard('tag3817');return false;" class="tag-decoration">release</div><div id="tag8936" onclick="CopyToClipboard('tag8936');return false;" class="tag-decoration">release-639a758</div><div id="tag9752" onclick="CopyToClipboard('tag9752');return false;" class="tag-decoration">release-1.4.0</div><div id="tag24594" onclick="CopyToClipboard('tag24594');return false;" class="tag-decoration">release-v1</div><div id="tag32622" onclick="CopyToClipboard('tag32622');return false;" class="tag-decoration">release-v1.4</div><div id="tag10500" onclick="CopyToClipboard('tag10500');return false;" class="tag-decoration">release-v1.4.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/autoscan/commit/639a75806d08c105ef65beba6e35e20556d22d9e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/autoscan/actions/runs/28391153561" target="_blank">2026-06-29 17:37:52</a></td></tr>
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
