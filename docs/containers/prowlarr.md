---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7893" onclick="CopyToClipboard('tag7893');return false;" class="tag-decoration">nightly</div><div id="tag4156" onclick="CopyToClipboard('tag4156');return false;" class="tag-decoration">nightly-dae8ca2</div><div id="tag32040" onclick="CopyToClipboard('tag32040');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/dae8ca21b5f7809398ded331754b2b0e3139398b" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21124044288" target="_blank">2026-01-19 03:13:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15121" onclick="CopyToClipboard('tag15121');return false;" class="tag-decoration">release</div><div id="tag26586" onclick="CopyToClipboard('tag26586');return false;" class="tag-decoration">release-88bceb1</div><div id="tag14193" onclick="CopyToClipboard('tag14193');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/88bceb1665374165973679bde2033b680094ce1b" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21124045336" target="_blank">2026-01-19 03:13:40</a></td></tr>
<tr><td><div id="tag28571" onclick="CopyToClipboard('tag28571');return false;" class="tag-decoration">testing</div><div id="tag30879" onclick="CopyToClipboard('tag30879');return false;" class="tag-decoration">testing-ff93640</div><div id="tag26606" onclick="CopyToClipboard('tag26606');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/ff9364031a436b2e4bb3d049049eb221c259576e" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21124045537" target="_blank">2026-01-19 03:13:41</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
