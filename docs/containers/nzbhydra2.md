---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19246" onclick="CopyToClipboard('tag19246');return false;" class="tag-decoration">release</div><div id="tag18691" onclick="CopyToClipboard('tag18691');return false;" class="tag-decoration">release-64a5960</div><div id="tag26811" onclick="CopyToClipboard('tag26811');return false;" class="tag-decoration">release-9.3.1</div><div id="tag22948" onclick="CopyToClipboard('tag22948');return false;" class="tag-decoration">release-v9</div><div id="tag32647" onclick="CopyToClipboard('tag32647');return false;" class="tag-decoration">release-v9.3</div><div id="tag1802" onclick="CopyToClipboard('tag1802');return false;" class="tag-decoration">release-v9.3.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/64a59609c38ca2cb2eb7223cf5f613d51befe1a2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43326956639" target="_blank">2026-11-12 23:13:03</a></td></tr>
<tr><td><div id="tag906" onclick="CopyToClipboard('tag906');return false;" class="tag-decoration">testing</div><div id="tag12671" onclick="CopyToClipboard('tag12671');return false;" class="tag-decoration">testing-12ca0a8</div><div id="tag19150" onclick="CopyToClipboard('tag19150');return false;" class="tag-decoration">testing-9.3.1</div><div id="tag32544" onclick="CopyToClipboard('tag32544');return false;" class="tag-decoration">testing-v9</div><div id="tag22978" onclick="CopyToClipboard('tag22978');return false;" class="tag-decoration">testing-v9.3</div><div id="tag7758" onclick="CopyToClipboard('tag7758');return false;" class="tag-decoration">testing-v9.3.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/12ca0a8d4848cfd8ba4d3db006d25e3b2b3bb939" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/43190199223" target="_blank">2026-11-12 09:17:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
