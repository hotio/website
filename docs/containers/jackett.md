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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1217" onclick="CopyToClipboard('tag1217');return false;" class="tag-decoration">release</div><div id="tag20926" onclick="CopyToClipboard('tag20926');return false;" class="tag-decoration">release-f0e69f4</div><div id="tag14512" onclick="CopyToClipboard('tag14512');return false;" class="tag-decoration">release-0.24.932</div><div id="tag5127" onclick="CopyToClipboard('tag5127');return false;" class="tag-decoration">release-v0</div><div id="tag29935" onclick="CopyToClipboard('tag29935');return false;" class="tag-decoration">release-v0.24</div><div id="tag20748" onclick="CopyToClipboard('tag20748');return false;" class="tag-decoration">release-v0.24.932</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f0e69f4de00244605b6fa64311f0a92396ed9291" target="_blank">Version update: 0.24.912 => 0.24.932</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21327903644" target="_blank">2026-01-25 05:59:00</a></td></tr>
<tr><td><div id="tag301" onclick="CopyToClipboard('tag301');return false;" class="tag-decoration">testing</div><div id="tag11620" onclick="CopyToClipboard('tag11620');return false;" class="tag-decoration">testing-f3acb3a</div><div id="tag4037" onclick="CopyToClipboard('tag4037');return false;" class="tag-decoration">testing-0.24.912</div><div id="tag28934" onclick="CopyToClipboard('tag28934');return false;" class="tag-decoration">testing-v0</div><div id="tag10001" onclick="CopyToClipboard('tag10001');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9987" onclick="CopyToClipboard('tag9987');return false;" class="tag-decoration">testing-v0.24.912</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f3acb3a3cdaaab5cda7bce6c1483b31022e855f8" target="_blank">Upstream update: alpinevpn-d7cd40a => alpinevpn-46fe99f</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21324837857" target="_blank">2026-01-25 01:32:39</a></td></tr>
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
