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
<tr><td><div id="tag29857" onclick="CopyToClipboard('tag29857');return false;" class="tag-decoration">nightly</div><div id="tag13616" onclick="CopyToClipboard('tag13616');return false;" class="tag-decoration">nightly-16da8ad</div><div id="tag20176" onclick="CopyToClipboard('tag20176');return false;" class="tag-decoration">nightly-cecdd631086232daaf73b3ba8a8c220315340d8c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/16da8ad53bd78f979550b258a7877bccd16d2f4b" target="_blank">Version update: 880fbc902dad86f35c765437c8dea28046ed0f4c => cecdd631086232daaf73b3ba8a8c220315340d8c</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22220974034" target="_blank">2026-02-20 10:43:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17191" onclick="CopyToClipboard('tag17191');return false;" class="tag-decoration">release</div><div id="tag2871" onclick="CopyToClipboard('tag2871');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag29385" onclick="CopyToClipboard('tag29385');return false;" class="tag-decoration">release-3.0.1</div><div id="tag14342" onclick="CopyToClipboard('tag14342');return false;" class="tag-decoration">release-v3</div><div id="tag25718" onclick="CopyToClipboard('tag25718');return false;" class="tag-decoration">release-v3.0</div><div id="tag10939" onclick="CopyToClipboard('tag10939');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
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
