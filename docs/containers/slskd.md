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
<tr><td><div id="tag28385" onclick="CopyToClipboard('tag28385');return false;" class="tag-decoration">nightly</div><div id="tag28296" onclick="CopyToClipboard('tag28296');return false;" class="tag-decoration">nightly-36e802a</div><div id="tag11445" onclick="CopyToClipboard('tag11445');return false;" class="tag-decoration">nightly-0.24.3.65534-92b49b7a</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/36e802a3d6bd20e15b3e8d906aea8701105b2d9c" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21325106916" target="_blank">2026-01-25 01:55:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26120" onclick="CopyToClipboard('tag26120');return false;" class="tag-decoration">release</div><div id="tag29210" onclick="CopyToClipboard('tag29210');return false;" class="tag-decoration">release-165f44f</div><div id="tag2269" onclick="CopyToClipboard('tag2269');return false;" class="tag-decoration">release-0.24.3</div><div id="tag24773" onclick="CopyToClipboard('tag24773');return false;" class="tag-decoration">release-v0</div><div id="tag8193" onclick="CopyToClipboard('tag8193');return false;" class="tag-decoration">release-v0.24</div><div id="tag7012" onclick="CopyToClipboard('tag7012');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/165f44fbad7554081f95b20c949f13e8057441ac" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21325107294" target="_blank">2026-01-25 01:55:53</a></td></tr>
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
