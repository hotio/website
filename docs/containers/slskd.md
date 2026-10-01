---
hide:
  - toc
title: hotio/slskd
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
<tr><td><div id="tag11014" onclick="CopyToClipboard('tag11014');return false;" class="tag-decoration">nightly</div><div id="tag14561" onclick="CopyToClipboard('tag14561');return false;" class="tag-decoration">nightly-6c8798d</div><div id="tag11045" onclick="CopyToClipboard('tag11045');return false;" class="tag-decoration">nightly-0.26.0.65534-072a8338</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/6c8798d4f7a3f71e68a47e525eff0351588c882f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/36890744187" target="_blank">2026-10-01 16:16:23</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28583" onclick="CopyToClipboard('tag28583');return false;" class="tag-decoration">release</div><div id="tag14048" onclick="CopyToClipboard('tag14048');return false;" class="tag-decoration">release-a64f8dc</div><div id="tag16351" onclick="CopyToClipboard('tag16351');return false;" class="tag-decoration">release-0.26.0</div><div id="tag8109" onclick="CopyToClipboard('tag8109');return false;" class="tag-decoration">release-v0</div><div id="tag18987" onclick="CopyToClipboard('tag18987');return false;" class="tag-decoration">release-v0.26</div><div id="tag28011" onclick="CopyToClipboard('tag28011');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/a64f8dce59b40ac6b7bb4cb31ce80c672626e2df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/36758052700" target="_blank">2026-09-30 18:21:54</a></td></tr>
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
