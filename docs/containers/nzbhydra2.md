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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2503" onclick="CopyToClipboard('tag2503');return false;" class="tag-decoration">release</div><div id="tag23410" onclick="CopyToClipboard('tag23410');return false;" class="tag-decoration">release-78b96a4</div><div id="tag592" onclick="CopyToClipboard('tag592');return false;" class="tag-decoration">release-8.2.3</div><div id="tag207" onclick="CopyToClipboard('tag207');return false;" class="tag-decoration">release-v8</div><div id="tag27998" onclick="CopyToClipboard('tag27998');return false;" class="tag-decoration">release-v8.2</div><div id="tag3233" onclick="CopyToClipboard('tag3233');return false;" class="tag-decoration">release-v8.2.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/78b96a4b2edc4d249d66844763bfdc7221e414b7" target="_blank">Version update: 8.2.2 => 8.2.3</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21009322131" target="_blank">2026-01-14 20:48:03</a></td></tr>
<tr><td><div id="tag25969" onclick="CopyToClipboard('tag25969');return false;" class="tag-decoration">testing</div><div id="tag4001" onclick="CopyToClipboard('tag4001');return false;" class="tag-decoration">testing-bfd9526</div><div id="tag9280" onclick="CopyToClipboard('tag9280');return false;" class="tag-decoration">testing-8.2.3</div><div id="tag32259" onclick="CopyToClipboard('tag32259');return false;" class="tag-decoration">testing-v8</div><div id="tag18976" onclick="CopyToClipboard('tag18976');return false;" class="tag-decoration">testing-v8.2</div><div id="tag6200" onclick="CopyToClipboard('tag6200');return false;" class="tag-decoration">testing-v8.2.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/bfd95261c495675284364c8ee798e9f94560973e" target="_blank">Version update: 8.2.2 => 8.2.3</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21009323176" target="_blank">2026-01-14 20:48:05</a></td></tr>
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
