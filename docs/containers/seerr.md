---
hide:
  - toc
title: hotio/seerr
status: new
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
<tr><td><div id="tag29356" onclick="CopyToClipboard('tag29356');return false;" class="tag-decoration">nightly</div><div id="tag5697" onclick="CopyToClipboard('tag5697');return false;" class="tag-decoration">nightly-ecaaa55</div><div id="tag26990" onclick="CopyToClipboard('tag26990');return false;" class="tag-decoration">nightly-8f0c90492859e1331cb9b4fbe85497ce5eb22061</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/ecaaa55efebecb033dfc82fa2a7efcfa9953929a" target="_blank">Version update: 04b9d87174f08e8d08ee31a032154f8b0f12e322 => 8f0c90492859e1331cb9b4fbe85497ce5eb22061</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22055410834" target="_blank">2026-02-16 08:29:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17435" onclick="CopyToClipboard('tag17435');return false;" class="tag-decoration">release</div><div id="tag9632" onclick="CopyToClipboard('tag9632');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag64" onclick="CopyToClipboard('tag64');return false;" class="tag-decoration">release-3.0.1</div><div id="tag32360" onclick="CopyToClipboard('tag32360');return false;" class="tag-decoration">release-v3</div><div id="tag7489" onclick="CopyToClipboard('tag7489');return false;" class="tag-decoration">release-v3.0</div><div id="tag28266" onclick="CopyToClipboard('tag28266');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
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
