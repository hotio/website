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
<tr><td><div id="tag3899" onclick="CopyToClipboard('tag3899');return false;" class="tag-decoration">nightly</div><div id="tag3170" onclick="CopyToClipboard('tag3170');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag4130" onclick="CopyToClipboard('tag4130');return false;" class="tag-decoration">nightly-8092cf5</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/8092cf562d43e9a7465ea245b69b079ed610e051" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20845761907" target="_blank">2026-01-09 08:22:20</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3839" onclick="CopyToClipboard('tag3839');return false;" class="tag-decoration">release</div><div id="tag29286" onclick="CopyToClipboard('tag29286');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag11548" onclick="CopyToClipboard('tag11548');return false;" class="tag-decoration">release-a7853c3</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/a7853c3ae837bf441fbc02fdabebcac5c8005f0e" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20845762595" target="_blank">2026-01-09 08:22:23</a></td></tr>
<tr><td><div id="tag11887" onclick="CopyToClipboard('tag11887');return false;" class="tag-decoration">testing</div><div id="tag30139" onclick="CopyToClipboard('tag30139');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag31522" onclick="CopyToClipboard('tag31522');return false;" class="tag-decoration">testing-f40afbd</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/f40afbd5440e37d8612f1d3de41b34a8331a6072" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20845762989" target="_blank">2026-01-09 08:22:23</a></td></tr>
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
