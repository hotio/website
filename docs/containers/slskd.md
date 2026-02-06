---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8903" onclick="CopyToClipboard('tag8903');return false;" class="tag-decoration">nightly</div><div id="tag19491" onclick="CopyToClipboard('tag19491');return false;" class="tag-decoration">nightly-2be6a77</div><div id="tag963" onclick="CopyToClipboard('tag963');return false;" class="tag-decoration">nightly-0.24.3.65534-1c4129da</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/2be6a77e6b83b779143fd2593cee95b2ccc9d584" target="_blank">Version update: 0.24.3.65534+09eabbce => 0.24.3.65534+1c4129da</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21736872723" target="_blank">2026-02-06 02:51:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1048" onclick="CopyToClipboard('tag1048');return false;" class="tag-decoration">release</div><div id="tag23983" onclick="CopyToClipboard('tag23983');return false;" class="tag-decoration">release-ee434f5</div><div id="tag11026" onclick="CopyToClipboard('tag11026');return false;" class="tag-decoration">release-0.24.3</div><div id="tag17851" onclick="CopyToClipboard('tag17851');return false;" class="tag-decoration">release-v0</div><div id="tag27662" onclick="CopyToClipboard('tag27662');return false;" class="tag-decoration">release-v0.24</div><div id="tag8590" onclick="CopyToClipboard('tag8590');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/ee434f54f15809e7538dfac685ec58cd87c035f2" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21428869993" target="_blank">2026-01-28 07:15:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
