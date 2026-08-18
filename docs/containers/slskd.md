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
<tr><td><div id="tag32256" onclick="CopyToClipboard('tag32256');return false;" class="tag-decoration">nightly</div><div id="tag7741" onclick="CopyToClipboard('tag7741');return false;" class="tag-decoration">nightly-163fba6</div><div id="tag24771" onclick="CopyToClipboard('tag24771');return false;" class="tag-decoration">nightly-0.26.0.65534-c80e3f45</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/163fba6fc50312f6d173ed89f9be1adb5c9464c3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/32144825257" target="_blank">2026-08-18 13:51:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7848" onclick="CopyToClipboard('tag7848');return false;" class="tag-decoration">release</div><div id="tag17986" onclick="CopyToClipboard('tag17986');return false;" class="tag-decoration">release-b0d2813</div><div id="tag3021" onclick="CopyToClipboard('tag3021');return false;" class="tag-decoration">release-0.26.0</div><div id="tag14009" onclick="CopyToClipboard('tag14009');return false;" class="tag-decoration">release-v0</div><div id="tag4712" onclick="CopyToClipboard('tag4712');return false;" class="tag-decoration">release-v0.26</div><div id="tag9609" onclick="CopyToClipboard('tag9609');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/b0d2813cccd2f0263a2771b8d8d168fa07a8c0a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/31874940539" target="_blank">2026-08-15 08:37:31</a></td></tr>
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
