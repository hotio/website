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
<tr><td><div id="tag361" onclick="CopyToClipboard('tag361');return false;" class="tag-decoration">nightly</div><div id="tag12352" onclick="CopyToClipboard('tag12352');return false;" class="tag-decoration">nightly-b046b10</div><div id="tag8370" onclick="CopyToClipboard('tag8370');return false;" class="tag-decoration">nightly-6076878f76f7f731f21b1bf12b44817321751779</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b046b1092e38176b1a22e611f294b499083e3d55" target="_blank">Version update: 8f0c90492859e1331cb9b4fbe85497ce5eb22061 => 6076878f76f7f731f21b1bf12b44817321751779</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22064986922" target="_blank">2026-02-16 13:40:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12593" onclick="CopyToClipboard('tag12593');return false;" class="tag-decoration">release</div><div id="tag24665" onclick="CopyToClipboard('tag24665');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag12619" onclick="CopyToClipboard('tag12619');return false;" class="tag-decoration">release-3.0.1</div><div id="tag4969" onclick="CopyToClipboard('tag4969');return false;" class="tag-decoration">release-v3</div><div id="tag9029" onclick="CopyToClipboard('tag9029');return false;" class="tag-decoration">release-v3.0</div><div id="tag8695" onclick="CopyToClipboard('tag8695');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
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
