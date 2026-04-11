---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8530" onclick="CopyToClipboard('tag8530');return false;" class="tag-decoration">nightly</div><div id="tag32027" onclick="CopyToClipboard('tag32027');return false;" class="tag-decoration">nightly-e68ebfc</div><div id="tag20119" onclick="CopyToClipboard('tag20119');return false;" class="tag-decoration">nightly-2.3.6.5351</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/e68ebfc505c2ac34bf1d37b3ede075ba7eb2c466" target="_blank">Version update: 2.3.6.5341 => 2.3.6.5351</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/24280066812" target="_blank">2026-04-11 09:58:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28410" onclick="CopyToClipboard('tag28410');return false;" class="tag-decoration">release</div><div id="tag22930" onclick="CopyToClipboard('tag22930');return false;" class="tag-decoration">release-d35d5b9</div><div id="tag18681" onclick="CopyToClipboard('tag18681');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d35d5b91926c578d9d968083bb6a9c2816a9b720" target="_blank">Version update: 2.3.0.5236 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985523872" target="_blank">2026-04-04 19:02:35</a></td></tr>
<tr><td><div id="tag10699" onclick="CopyToClipboard('tag10699');return false;" class="tag-decoration">testing</div><div id="tag23458" onclick="CopyToClipboard('tag23458');return false;" class="tag-decoration">testing-288b992</div><div id="tag19583" onclick="CopyToClipboard('tag19583');return false;" class="tag-decoration">testing-2.3.5.5327</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/288b9921fe55a183df1faa0246e3effb7a7675f1" target="_blank">Version update: 2.3.5.5323 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985524217" target="_blank">2026-04-04 19:02:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
