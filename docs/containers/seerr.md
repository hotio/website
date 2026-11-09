---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27359" onclick="CopyToClipboard('tag27359');return false;" class="tag-decoration">nightly</div><div id="tag11091" onclick="CopyToClipboard('tag11091');return false;" class="tag-decoration">nightly-891c718</div><div id="tag12990" onclick="CopyToClipboard('tag12990');return false;" class="tag-decoration">nightly-3f7d5c3bd2aff1af49f4a06e277f7dee0c2f2f14</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/891c718cf48f67e340d6e7bfc46f5def7d61441b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42674975637" target="_blank">2026-11-09 18:32:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21730" onclick="CopyToClipboard('tag21730');return false;" class="tag-decoration">release</div><div id="tag24545" onclick="CopyToClipboard('tag24545');return false;" class="tag-decoration">release-582fcb1</div><div id="tag17577" onclick="CopyToClipboard('tag17577');return false;" class="tag-decoration">release-3.5.1</div><div id="tag964" onclick="CopyToClipboard('tag964');return false;" class="tag-decoration">release-v3</div><div id="tag3777" onclick="CopyToClipboard('tag3777');return false;" class="tag-decoration">release-v3.5</div><div id="tag16495" onclick="CopyToClipboard('tag16495');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/582fcb115f50656e05262c57c3f0aca6d22760a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/42320133641" target="_blank">2026-11-07 00:45:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
