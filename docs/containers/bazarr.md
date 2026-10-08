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
<tr><td><div id="tag24858" onclick="CopyToClipboard('tag24858');return false;" class="tag-decoration">nightly</div><div id="tag18435" onclick="CopyToClipboard('tag18435');return false;" class="tag-decoration">nightly-036ec8c</div><div id="tag31720" onclick="CopyToClipboard('tag31720');return false;" class="tag-decoration">nightly-1.6.3-beta.7</div><div id="tag3048" onclick="CopyToClipboard('tag3048');return false;" class="tag-decoration">nightly-v1</div><div id="tag18253" onclick="CopyToClipboard('tag18253');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag4690" onclick="CopyToClipboard('tag4690');return false;" class="tag-decoration">nightly-v1.6.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/036ec8cfb0bb4c4155cffc96b8f3aaedbd8deee6" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37844497895" target="_blank">2026-10-08 21:07:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25205" onclick="CopyToClipboard('tag25205');return false;" class="tag-decoration">release</div><div id="tag29518" onclick="CopyToClipboard('tag29518');return false;" class="tag-decoration">release-1481c38</div><div id="tag17865" onclick="CopyToClipboard('tag17865');return false;" class="tag-decoration">release-1.6.2</div><div id="tag28024" onclick="CopyToClipboard('tag28024');return false;" class="tag-decoration">release-v1</div><div id="tag16349" onclick="CopyToClipboard('tag16349');return false;" class="tag-decoration">release-v1.6</div><div id="tag5365" onclick="CopyToClipboard('tag5365');return false;" class="tag-decoration">release-v1.6.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/1481c387cdf30d1b5b681b8dc0eea86a7735080c" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/37799892852" target="_blank">2026-10-08 15:20:04</a></td></tr>
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
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
