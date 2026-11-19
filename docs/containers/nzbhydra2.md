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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26476" onclick="CopyToClipboard('tag26476');return false;" class="tag-decoration">release</div><div id="tag5371" onclick="CopyToClipboard('tag5371');return false;" class="tag-decoration">release-89e4591</div><div id="tag2097" onclick="CopyToClipboard('tag2097');return false;" class="tag-decoration">release-9.3.3</div><div id="tag2975" onclick="CopyToClipboard('tag2975');return false;" class="tag-decoration">release-v9</div><div id="tag16510" onclick="CopyToClipboard('tag16510');return false;" class="tag-decoration">release-v9.3</div><div id="tag26326" onclick="CopyToClipboard('tag26326');return false;" class="tag-decoration">release-v9.3.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/89e45918b9e58f78410e4c1141eba3f49fcb8f11" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44592191825" target="_blank">2026-11-19 18:51:19</a></td></tr>
<tr><td><div id="tag23455" onclick="CopyToClipboard('tag23455');return false;" class="tag-decoration">testing</div><div id="tag13696" onclick="CopyToClipboard('tag13696');return false;" class="tag-decoration">testing-2024339</div><div id="tag29406" onclick="CopyToClipboard('tag29406');return false;" class="tag-decoration">testing-9.3.3</div><div id="tag3434" onclick="CopyToClipboard('tag3434');return false;" class="tag-decoration">testing-v9</div><div id="tag26729" onclick="CopyToClipboard('tag26729');return false;" class="tag-decoration">testing-v9.3</div><div id="tag7325" onclick="CopyToClipboard('tag7325');return false;" class="tag-decoration">testing-v9.3.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/20243394e5c1e635699d22c46a5be06e638ff2a6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/44592212030" target="_blank">2026-11-19 18:51:27</a></td></tr>
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
