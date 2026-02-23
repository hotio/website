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
<tr><td><div id="tag20376" onclick="CopyToClipboard('tag20376');return false;" class="tag-decoration">nightly</div><div id="tag3121" onclick="CopyToClipboard('tag3121');return false;" class="tag-decoration">nightly-e9c9d48</div><div id="tag13541" onclick="CopyToClipboard('tag13541');return false;" class="tag-decoration">nightly-3bcb4da1e5048a7b2141716d9bf0387a75909ee6</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/e9c9d4863fb7e5fee3c0cba994e9e969b0ccf198" target="_blank">Version update: 5013d1d54db5787469e030493fc628f5c2db57d9 => 3bcb4da1e5048a7b2141716d9bf0387a75909ee6</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22287946420" target="_blank">2026-02-22 23:42:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28889" onclick="CopyToClipboard('tag28889');return false;" class="tag-decoration">release</div><div id="tag29542" onclick="CopyToClipboard('tag29542');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag2648" onclick="CopyToClipboard('tag2648');return false;" class="tag-decoration">release-3.0.1</div><div id="tag5582" onclick="CopyToClipboard('tag5582');return false;" class="tag-decoration">release-v3</div><div id="tag29647" onclick="CopyToClipboard('tag29647');return false;" class="tag-decoration">release-v3.0</div><div id="tag23961" onclick="CopyToClipboard('tag23961');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
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
