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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag772" onclick="CopyToClipboard('tag772');return false;" class="tag-decoration">release</div><div id="tag1295" onclick="CopyToClipboard('tag1295');return false;" class="tag-decoration">release-ab33731</div><div id="tag11738" onclick="CopyToClipboard('tag11738');return false;" class="tag-decoration">release-0.24.2900</div><div id="tag30468" onclick="CopyToClipboard('tag30468');return false;" class="tag-decoration">release-v0</div><div id="tag2660" onclick="CopyToClipboard('tag2660');return false;" class="tag-decoration">release-v0.24</div><div id="tag19692" onclick="CopyToClipboard('tag19692');return false;" class="tag-decoration">release-v0.24.2900</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ab337319ce7603f8733051e76ed46f800b1c8fab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39941353630" target="_blank">2026-10-23 10:45:30</a></td></tr>
<tr><td><div id="tag2240" onclick="CopyToClipboard('tag2240');return false;" class="tag-decoration">testing</div><div id="tag15364" onclick="CopyToClipboard('tag15364');return false;" class="tag-decoration">testing-c07e56b</div><div id="tag31176" onclick="CopyToClipboard('tag31176');return false;" class="tag-decoration">testing-0.24.2903</div><div id="tag26774" onclick="CopyToClipboard('tag26774');return false;" class="tag-decoration">testing-v0</div><div id="tag16824" onclick="CopyToClipboard('tag16824');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13716" onclick="CopyToClipboard('tag13716');return false;" class="tag-decoration">testing-v0.24.2903</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c07e56be46685ce3140e5be9b31c1e350c1f1532" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40071243349" target="_blank">2026-10-24 06:42:06</a></td></tr>
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
