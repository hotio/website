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
<tr><td><div id="tag5570" onclick="CopyToClipboard('tag5570');return false;" class="tag-decoration">nightly</div><div id="tag22591" onclick="CopyToClipboard('tag22591');return false;" class="tag-decoration">nightly-1d83b56</div><div id="tag23395" onclick="CopyToClipboard('tag23395');return false;" class="tag-decoration">nightly-0.24.2.65534-35fb847f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/1d83b56ba11fcb52ec74c13fd82b758437bfd5d1" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21064910590" target="_blank">2026-01-16 11:19:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3312" onclick="CopyToClipboard('tag3312');return false;" class="tag-decoration">release</div><div id="tag17870" onclick="CopyToClipboard('tag17870');return false;" class="tag-decoration">release-677804a</div><div id="tag952" onclick="CopyToClipboard('tag952');return false;" class="tag-decoration">release-0.24.3</div><div id="tag17614" onclick="CopyToClipboard('tag17614');return false;" class="tag-decoration">release-v0</div><div id="tag32161" onclick="CopyToClipboard('tag32161');return false;" class="tag-decoration">release-v0.24</div><div id="tag25801" onclick="CopyToClipboard('tag25801');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/677804addda52360488b280f439682615f7df6ad" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21064910857" target="_blank">2026-01-16 11:19:01</a></td></tr>
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
