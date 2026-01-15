---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31878" onclick="CopyToClipboard('tag31878');return false;" class="tag-decoration">release</div><div id="tag25338" onclick="CopyToClipboard('tag25338');return false;" class="tag-decoration">release-ae0e961</div><div id="tag1450" onclick="CopyToClipboard('tag1450');return false;" class="tag-decoration">release-0.24.850</div><div id="tag21558" onclick="CopyToClipboard('tag21558');return false;" class="tag-decoration">release-v0</div><div id="tag13267" onclick="CopyToClipboard('tag13267');return false;" class="tag-decoration">release-v0.24</div><div id="tag4195" onclick="CopyToClipboard('tag4195');return false;" class="tag-decoration">release-v0.24.850</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ae0e96189d3fb98438a959d730356bee959bc22b" target="_blank">Version update: 0.24.846 => 0.24.850</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21022325018" target="_blank">2026-01-15 06:45:13</a></td></tr>
<tr><td><div id="tag13264" onclick="CopyToClipboard('tag13264');return false;" class="tag-decoration">testing</div><div id="tag21169" onclick="CopyToClipboard('tag21169');return false;" class="tag-decoration">testing-425aae2</div><div id="tag4124" onclick="CopyToClipboard('tag4124');return false;" class="tag-decoration">testing-0.24.846</div><div id="tag32448" onclick="CopyToClipboard('tag32448');return false;" class="tag-decoration">testing-v0</div><div id="tag516" onclick="CopyToClipboard('tag516');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9501" onclick="CopyToClipboard('tag9501');return false;" class="tag-decoration">testing-v0.24.846</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/425aae2b0348633449ea4d93431495dfa7bfbd05" target="_blank">Version update: 0.24.834 => 0.24.846</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20985175230" target="_blank">2026-01-14 06:48:59</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
