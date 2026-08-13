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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14525" onclick="CopyToClipboard('tag14525');return false;" class="tag-decoration">release</div><div id="tag30231" onclick="CopyToClipboard('tag30231');return false;" class="tag-decoration">release-e756ff3</div><div id="tag22067" onclick="CopyToClipboard('tag22067');return false;" class="tag-decoration">release-0.24.2404</div><div id="tag7645" onclick="CopyToClipboard('tag7645');return false;" class="tag-decoration">release-v0</div><div id="tag11262" onclick="CopyToClipboard('tag11262');return false;" class="tag-decoration">release-v0.24</div><div id="tag5969" onclick="CopyToClipboard('tag5969');return false;" class="tag-decoration">release-v0.24.2404</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e756ff357a8d186d7ac19295d29f5f0d3ff68c78" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31672856723" target="_blank">2026-08-13 06:10:08</a></td></tr>
<tr><td><div id="tag24651" onclick="CopyToClipboard('tag24651');return false;" class="tag-decoration">testing</div><div id="tag121" onclick="CopyToClipboard('tag121');return false;" class="tag-decoration">testing-030c7d0</div><div id="tag27506" onclick="CopyToClipboard('tag27506');return false;" class="tag-decoration">testing-0.24.2398</div><div id="tag22315" onclick="CopyToClipboard('tag22315');return false;" class="tag-decoration">testing-v0</div><div id="tag17554" onclick="CopyToClipboard('tag17554');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19603" onclick="CopyToClipboard('tag19603');return false;" class="tag-decoration">testing-v0.24.2398</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/030c7d069d05844436846837a73afd0502a5d1d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/31572930946" target="_blank">2026-08-12 07:11:09</a></td></tr>
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
