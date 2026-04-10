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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2162" onclick="CopyToClipboard('tag2162');return false;" class="tag-decoration">release</div><div id="tag14180" onclick="CopyToClipboard('tag14180');return false;" class="tag-decoration">release-b22f731</div><div id="tag12591" onclick="CopyToClipboard('tag12591');return false;" class="tag-decoration">release-0.24.1554</div><div id="tag10000" onclick="CopyToClipboard('tag10000');return false;" class="tag-decoration">release-v0</div><div id="tag14713" onclick="CopyToClipboard('tag14713');return false;" class="tag-decoration">release-v0.24</div><div id="tag19518" onclick="CopyToClipboard('tag19518');return false;" class="tag-decoration">release-v0.24.1554</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b22f731734779e87321d536a3463d4d251845b02" target="_blank">Version update: 0.24.1552 => 0.24.1554</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24122209274" target="_blank">2026-04-08 06:54:39</a></td></tr>
<tr><td><div id="tag4635" onclick="CopyToClipboard('tag4635');return false;" class="tag-decoration">testing</div><div id="tag6900" onclick="CopyToClipboard('tag6900');return false;" class="tag-decoration">testing-681896a</div><div id="tag28696" onclick="CopyToClipboard('tag28696');return false;" class="tag-decoration">testing-0.24.1562</div><div id="tag7178" onclick="CopyToClipboard('tag7178');return false;" class="tag-decoration">testing-v0</div><div id="tag28606" onclick="CopyToClipboard('tag28606');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15455" onclick="CopyToClipboard('tag15455');return false;" class="tag-decoration">testing-v0.24.1562</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/681896a17734fbd09148a5f8567ff6971eb2abb3" target="_blank">Version update: 0.24.1554 => 0.24.1562</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24229370413" target="_blank">2026-04-10 06:15:48</a></td></tr>
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
