---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag11868" onclick="CopyToClipboard('tag11868');return false;" class="tag-decoration">nightly</div><div id="tag13045" onclick="CopyToClipboard('tag13045');return false;" class="tag-decoration">nightly-3e4ff30</div><div id="tag3265" onclick="CopyToClipboard('tag3265');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/3e4ff307413e191417df86d59aafc5684eed6067" target="_blank">don't push to latest</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21026970302" target="_blank">2026-01-15 09:52:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19657" onclick="CopyToClipboard('tag19657');return false;" class="tag-decoration">release</div><div id="tag19279" onclick="CopyToClipboard('tag19279');return false;" class="tag-decoration">release-56e4cfd</div><div id="tag10542" onclick="CopyToClipboard('tag10542');return false;" class="tag-decoration">release-0.24.2</div><div id="tag8376" onclick="CopyToClipboard('tag8376');return false;" class="tag-decoration">release-v0</div><div id="tag20521" onclick="CopyToClipboard('tag20521');return false;" class="tag-decoration">release-v0.24</div><div id="tag1713" onclick="CopyToClipboard('tag1713');return false;" class="tag-decoration">release-v0.24.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/56e4cfd04af6ea0ea21117b0e067ae344c6229f1" target="_blank">Update to version: 0.24.2</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/20950212862" target="_blank">2026-01-13 08:41:10</a></td></tr>
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
