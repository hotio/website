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
<tr><td><div id="tag31052" onclick="CopyToClipboard('tag31052');return false;" class="tag-decoration">nightly</div><div id="tag12894" onclick="CopyToClipboard('tag12894');return false;" class="tag-decoration">nightly-cdcd41c</div><div id="tag1993" onclick="CopyToClipboard('tag1993');return false;" class="tag-decoration">nightly-0.25.1.65534-8fb75597</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/cdcd41cf52b36640226e9afd6bc3393e045f44b0" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25605062855" target="_blank">2026-05-09 15:44:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2220" onclick="CopyToClipboard('tag2220');return false;" class="tag-decoration">release</div><div id="tag22717" onclick="CopyToClipboard('tag22717');return false;" class="tag-decoration">release-2539e30</div><div id="tag19503" onclick="CopyToClipboard('tag19503');return false;" class="tag-decoration">release-0.25.1</div><div id="tag13555" onclick="CopyToClipboard('tag13555');return false;" class="tag-decoration">release-v0</div><div id="tag19125" onclick="CopyToClipboard('tag19125');return false;" class="tag-decoration">release-v0.25</div><div id="tag7393" onclick="CopyToClipboard('tag7393');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/2539e30b7865869f82bfe452549bc0ccdef522c5" target="_blank">Version update: 0.25.0 => 0.25.1</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/24647015814" target="_blank">2026-04-20 03:27:54</a></td></tr>
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
