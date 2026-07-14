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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12974" onclick="CopyToClipboard('tag12974');return false;" class="tag-decoration">release</div><div id="tag3944" onclick="CopyToClipboard('tag3944');return false;" class="tag-decoration">release-247bd39</div><div id="tag3897" onclick="CopyToClipboard('tag3897');return false;" class="tag-decoration">release-0.24.2216</div><div id="tag904" onclick="CopyToClipboard('tag904');return false;" class="tag-decoration">release-v0</div><div id="tag14078" onclick="CopyToClipboard('tag14078');return false;" class="tag-decoration">release-v0.24</div><div id="tag3877" onclick="CopyToClipboard('tag3877');return false;" class="tag-decoration">release-v0.24.2216</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/247bd3977fb0f8f3bb97123635e32d01c7d130e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29313389066" target="_blank">2026-07-14 07:05:07</a></td></tr>
<tr><td><div id="tag4144" onclick="CopyToClipboard('tag4144');return false;" class="tag-decoration">testing</div><div id="tag1105" onclick="CopyToClipboard('tag1105');return false;" class="tag-decoration">testing-2baac83</div><div id="tag7616" onclick="CopyToClipboard('tag7616');return false;" class="tag-decoration">testing-0.24.2216</div><div id="tag26631" onclick="CopyToClipboard('tag26631');return false;" class="tag-decoration">testing-v0</div><div id="tag10781" onclick="CopyToClipboard('tag10781');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24025" onclick="CopyToClipboard('tag24025');return false;" class="tag-decoration">testing-v0.24.2216</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/2baac836c6692206e104867430ece410bf37f0e0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29313382636" target="_blank">2026-07-14 07:05:00</a></td></tr>
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
