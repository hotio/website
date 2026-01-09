---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/prowlarr/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13794" onclick="CopyToClipboard('tag13794');return false;" class="tag-decoration">nightly</div><div id="tag6645" onclick="CopyToClipboard('tag6645');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag11928" onclick="CopyToClipboard('tag11928');return false;" class="tag-decoration">nightly-a9f24d3</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/a9f24d3ade325a2813345bd0650118642d0978e3" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20850340728" target="_blank">2026-01-09 11:23:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10342" onclick="CopyToClipboard('tag10342');return false;" class="tag-decoration">release</div><div id="tag30035" onclick="CopyToClipboard('tag30035');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag29632" onclick="CopyToClipboard('tag29632');return false;" class="tag-decoration">release-a7853c3</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/a7853c3ae837bf441fbc02fdabebcac5c8005f0e" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20845762595" target="_blank">2026-01-09 08:22:23</a></td></tr>
<tr><td><div id="tag3282" onclick="CopyToClipboard('tag3282');return false;" class="tag-decoration">testing</div><div id="tag6230" onclick="CopyToClipboard('tag6230');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag15002" onclick="CopyToClipboard('tag15002');return false;" class="tag-decoration">testing-f40afbd</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/f40afbd5440e37d8612f1d3de41b34a8331a6072" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20845762989" target="_blank">2026-01-09 08:22:23</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
