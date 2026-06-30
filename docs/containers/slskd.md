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
<tr><td><div id="tag24386" onclick="CopyToClipboard('tag24386');return false;" class="tag-decoration">nightly</div><div id="tag26911" onclick="CopyToClipboard('tag26911');return false;" class="tag-decoration">nightly-ab30750</div><div id="tag19893" onclick="CopyToClipboard('tag19893');return false;" class="tag-decoration">nightly-0.25.1.65534-3edca316</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/ab3075024f698df47577edb333335c960b205b33" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28442024696" target="_blank">2026-06-30 11:48:55</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20912" onclick="CopyToClipboard('tag20912');return false;" class="tag-decoration">release</div><div id="tag17417" onclick="CopyToClipboard('tag17417');return false;" class="tag-decoration">release-328de75</div><div id="tag11992" onclick="CopyToClipboard('tag11992');return false;" class="tag-decoration">release-0.25.1</div><div id="tag20026" onclick="CopyToClipboard('tag20026');return false;" class="tag-decoration">release-v0</div><div id="tag4207" onclick="CopyToClipboard('tag4207');return false;" class="tag-decoration">release-v0.25</div><div id="tag4647" onclick="CopyToClipboard('tag4647');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/328de750635b1d102d84ea9a7b85b78ca4694aca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28442020521" target="_blank">2026-06-30 11:48:50</a></td></tr>
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
