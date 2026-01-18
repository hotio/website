---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21187" onclick="CopyToClipboard('tag21187');return false;" class="tag-decoration">release</div><div id="tag5301" onclick="CopyToClipboard('tag5301');return false;" class="tag-decoration">release-e5fc622</div><div id="tag28316" onclick="CopyToClipboard('tag28316');return false;" class="tag-decoration">release-0.24.879</div><div id="tag4163" onclick="CopyToClipboard('tag4163');return false;" class="tag-decoration">release-v0</div><div id="tag21423" onclick="CopyToClipboard('tag21423');return false;" class="tag-decoration">release-v0.24</div><div id="tag32694" onclick="CopyToClipboard('tag32694');return false;" class="tag-decoration">release-v0.24.879</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e5fc62229634cdd979ae46178be78f15a4170117" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21113693911" target="_blank">2026-01-18 14:56:51</a></td></tr>
<tr><td><div id="tag6814" onclick="CopyToClipboard('tag6814');return false;" class="tag-decoration">testing</div><div id="tag17962" onclick="CopyToClipboard('tag17962');return false;" class="tag-decoration">testing-37ab8cf</div><div id="tag26900" onclick="CopyToClipboard('tag26900');return false;" class="tag-decoration">testing-0.24.879</div><div id="tag12228" onclick="CopyToClipboard('tag12228');return false;" class="tag-decoration">testing-v0</div><div id="tag29703" onclick="CopyToClipboard('tag29703');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5241" onclick="CopyToClipboard('tag5241');return false;" class="tag-decoration">testing-v0.24.879</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/37ab8cf7d5d40f587d6534c510e1074743842c51" target="_blank">Version update: 0.24.868 => 0.24.879</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21107485886" target="_blank">2026-01-18 06:38:05</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
