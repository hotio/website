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
<tr><td><div id="tag31759" onclick="CopyToClipboard('tag31759');return false;" class="tag-decoration">nightly</div><div id="tag30355" onclick="CopyToClipboard('tag30355');return false;" class="tag-decoration">nightly-1.5.5-beta.3</div><div id="tag27795" onclick="CopyToClipboard('tag27795');return false;" class="tag-decoration">nightly-5e4071d</div><div id="tag15095" onclick="CopyToClipboard('tag15095');return false;" class="tag-decoration">nightly-v1</div><div id="tag17666" onclick="CopyToClipboard('tag17666');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag23287" onclick="CopyToClipboard('tag23287');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/5e4071d3adad1c5a697e853f9748747078ab1561" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20892083325" target="_blank">2026-01-11 08:19:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31491" onclick="CopyToClipboard('tag31491');return false;" class="tag-decoration">release</div><div id="tag18255" onclick="CopyToClipboard('tag18255');return false;" class="tag-decoration">release-1.5.4</div><div id="tag20846" onclick="CopyToClipboard('tag20846');return false;" class="tag-decoration">release-8fe8513</div><div id="tag18170" onclick="CopyToClipboard('tag18170');return false;" class="tag-decoration">release-v1</div><div id="tag16673" onclick="CopyToClipboard('tag16673');return false;" class="tag-decoration">release-v1.5</div><div id="tag21979" onclick="CopyToClipboard('tag21979');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/8fe8513db159b0550c905209f5989b266c997dc7" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/20892083483" target="_blank">2026-01-11 08:19:19</a></td></tr>
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
