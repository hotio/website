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
<tr><td><div id="tag17039" onclick="CopyToClipboard('tag17039');return false;" class="tag-decoration">nightly</div><div id="tag29004" onclick="CopyToClipboard('tag29004');return false;" class="tag-decoration">nightly-16e56fb</div><div id="tag2252" onclick="CopyToClipboard('tag2252');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/16e56fb4d437790fb67c30adcfaacd9df3dbceee" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25664480872" target="_blank">2026-05-11 10:23:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22265" onclick="CopyToClipboard('tag22265');return false;" class="tag-decoration">release</div><div id="tag3008" onclick="CopyToClipboard('tag3008');return false;" class="tag-decoration">release-c870b34</div><div id="tag21295" onclick="CopyToClipboard('tag21295');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/c870b347a941ce61ca01af47ca5ba9d0ba21d934" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25664484417" target="_blank">2026-05-11 10:24:04</a></td></tr>
<tr><td><div id="tag19167" onclick="CopyToClipboard('tag19167');return false;" class="tag-decoration">testing</div><div id="tag1218" onclick="CopyToClipboard('tag1218');return false;" class="tag-decoration">testing-839c3bf</div><div id="tag27436" onclick="CopyToClipboard('tag27436');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/839c3bfacc6db1e080ec9e70127e4fb76d2e8827" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25664486308" target="_blank">2026-05-11 10:24:07</a></td></tr>
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
