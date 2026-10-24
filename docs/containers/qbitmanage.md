---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag9296" onclick="CopyToClipboard('tag9296');return false;" class="tag-decoration">nightly</div><div id="tag8824" onclick="CopyToClipboard('tag8824');return false;" class="tag-decoration">nightly-9ebad81</div><div id="tag4738" onclick="CopyToClipboard('tag4738');return false;" class="tag-decoration">nightly-aa6c2988488a627381dbcf2a0645022a09dd860f</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/9ebad8111cc75f020a0a0652d442426d0b0bee2b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40111397900" target="_blank">2026-10-24 16:24:12</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14669" onclick="CopyToClipboard('tag14669');return false;" class="tag-decoration">release</div><div id="tag12553" onclick="CopyToClipboard('tag12553');return false;" class="tag-decoration">release-bf04fed</div><div id="tag30862" onclick="CopyToClipboard('tag30862');return false;" class="tag-decoration">release-4.14.0</div><div id="tag10434" onclick="CopyToClipboard('tag10434');return false;" class="tag-decoration">release-v4</div><div id="tag4518" onclick="CopyToClipboard('tag4518');return false;" class="tag-decoration">release-v4.14</div><div id="tag17243" onclick="CopyToClipboard('tag17243');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/bf04fedff64a4f6652bf6f97e5513f6a406b2dc9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/40075697619" target="_blank">2026-10-24 07:50:10</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
