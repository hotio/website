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
<tr><td><div id="tag13150" onclick="CopyToClipboard('tag13150');return false;" class="tag-decoration">nightly</div><div id="tag11818" onclick="CopyToClipboard('tag11818');return false;" class="tag-decoration">nightly-f46959a</div><div id="tag30861" onclick="CopyToClipboard('tag30861');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/f46959a0e3b4b25f37d3a2b51138e6db3aa11381" target="_blank">Version update:  => 0.24.2.65534+35fb847f</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21042760900" target="_blank">2026-01-15 18:56:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26665" onclick="CopyToClipboard('tag26665');return false;" class="tag-decoration">release</div><div id="tag16670" onclick="CopyToClipboard('tag16670');return false;" class="tag-decoration">release-db02190</div><div id="tag4742" onclick="CopyToClipboard('tag4742');return false;" class="tag-decoration">release-0.24.3</div><div id="tag8728" onclick="CopyToClipboard('tag8728');return false;" class="tag-decoration">release-v0</div><div id="tag29277" onclick="CopyToClipboard('tag29277');return false;" class="tag-decoration">release-v0.24</div><div id="tag8900" onclick="CopyToClipboard('tag8900');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/db021908c9b2497cd874adba18921eaa214bb188" target="_blank">Version update: 0.24.2 => 0.24.3</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21035576993" target="_blank">2026-01-15 14:55:36</a></td></tr>
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
