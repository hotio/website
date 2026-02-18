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
<tr><td><div id="tag14899" onclick="CopyToClipboard('tag14899');return false;" class="tag-decoration">nightly</div><div id="tag26513" onclick="CopyToClipboard('tag26513');return false;" class="tag-decoration">nightly-d9c1f43</div><div id="tag29515" onclick="CopyToClipboard('tag29515');return false;" class="tag-decoration">nightly-e0e4b6f512d2efe717d1065ab5a85aa5c717dea4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d9c1f4324cd0e273fb625cc7a6fb137d551dee86" target="_blank">Version update: dc1734d41fcd7a66f835e5f14538254fa8f8b2c2 => e0e4b6f512d2efe717d1065ab5a85aa5c717dea4</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22143785199" target="_blank">2026-02-18 14:28:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4959" onclick="CopyToClipboard('tag4959');return false;" class="tag-decoration">release</div><div id="tag29693" onclick="CopyToClipboard('tag29693');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag3234" onclick="CopyToClipboard('tag3234');return false;" class="tag-decoration">release-3.0.1</div><div id="tag13383" onclick="CopyToClipboard('tag13383');return false;" class="tag-decoration">release-v3</div><div id="tag26141" onclick="CopyToClipboard('tag26141');return false;" class="tag-decoration">release-v3.0</div><div id="tag14781" onclick="CopyToClipboard('tag14781');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
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
