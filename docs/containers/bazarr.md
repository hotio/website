---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag12386" onclick="CopyToClipboard('tag12386');return false;" class="tag-decoration">nightly</div><div id="tag24804" onclick="CopyToClipboard('tag24804');return false;" class="tag-decoration">nightly-1.5.5-beta.3</div><div id="tag12683" onclick="CopyToClipboard('tag12683');return false;" class="tag-decoration">nightly-3711b6c</div><div id="tag21465" onclick="CopyToClipboard('tag21465');return false;" class="tag-decoration">nightly-v1</div><div id="tag10342" onclick="CopyToClipboard('tag10342');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag23016" onclick="CopyToClipboard('tag23016');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/3711b6c2028863777c4fab7f9040d2d6fe00c161" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20898157159" target="_blank">2026-01-11 16:17:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13032" onclick="CopyToClipboard('tag13032');return false;" class="tag-decoration">release</div><div id="tag26195" onclick="CopyToClipboard('tag26195');return false;" class="tag-decoration">release-1.5.4</div><div id="tag31421" onclick="CopyToClipboard('tag31421');return false;" class="tag-decoration">release-2a308b8</div><div id="tag21670" onclick="CopyToClipboard('tag21670');return false;" class="tag-decoration">release-v1</div><div id="tag30757" onclick="CopyToClipboard('tag30757');return false;" class="tag-decoration">release-v1.5</div><div id="tag6698" onclick="CopyToClipboard('tag6698');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2a308b8f8ed6f0ca4ebfb9d66fffadf67cfa8e6f" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20898157213" target="_blank">2026-01-11 16:17:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
