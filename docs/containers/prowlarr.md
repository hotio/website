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
<tr><td><div id="tag8260" onclick="CopyToClipboard('tag8260');return false;" class="tag-decoration">nightly</div><div id="tag14470" onclick="CopyToClipboard('tag14470');return false;" class="tag-decoration">nightly-f74dfa6</div><div id="tag18268" onclick="CopyToClipboard('tag18268');return false;" class="tag-decoration">nightly-2.3.6.5340</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/f74dfa6acf054882331862350b44f4608ba6bb4d" target="_blank">Version update: 2.3.6.5326 => 2.3.6.5340</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/24155737392" target="_blank">2026-04-08 19:59:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30888" onclick="CopyToClipboard('tag30888');return false;" class="tag-decoration">release</div><div id="tag27867" onclick="CopyToClipboard('tag27867');return false;" class="tag-decoration">release-d35d5b9</div><div id="tag18891" onclick="CopyToClipboard('tag18891');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d35d5b91926c578d9d968083bb6a9c2816a9b720" target="_blank">Version update: 2.3.0.5236 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985523872" target="_blank">2026-04-04 19:02:35</a></td></tr>
<tr><td><div id="tag23350" onclick="CopyToClipboard('tag23350');return false;" class="tag-decoration">testing</div><div id="tag27777" onclick="CopyToClipboard('tag27777');return false;" class="tag-decoration">testing-288b992</div><div id="tag7280" onclick="CopyToClipboard('tag7280');return false;" class="tag-decoration">testing-2.3.5.5327</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/288b9921fe55a183df1faa0246e3effb7a7675f1" target="_blank">Version update: 2.3.5.5323 => 2.3.5.5327</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/23985524217" target="_blank">2026-04-04 19:02:38</a></td></tr>
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
