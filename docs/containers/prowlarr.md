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
<tr><td><div id="tag5087" onclick="CopyToClipboard('tag5087');return false;" class="tag-decoration">nightly</div><div id="tag21677" onclick="CopyToClipboard('tag21677');return false;" class="tag-decoration">nightly-af1e029</div><div id="tag4810" onclick="CopyToClipboard('tag4810');return false;" class="tag-decoration">nightly-2.6.1.5496</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/af1e02947cee6cc38c4d1e501e217bcb56c7e524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/30382270155" target="_blank">2026-07-28 17:18:05</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32598" onclick="CopyToClipboard('tag32598');return false;" class="tag-decoration">release</div><div id="tag20429" onclick="CopyToClipboard('tag20429');return false;" class="tag-decoration">release-88d7116</div><div id="tag490" onclick="CopyToClipboard('tag490');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/88d7116430b83963efb517b87c425b560fee712f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29919294351" target="_blank">2026-07-22 12:21:29</a></td></tr>
<tr><td><div id="tag803" onclick="CopyToClipboard('tag803');return false;" class="tag-decoration">testing</div><div id="tag2906" onclick="CopyToClipboard('tag2906');return false;" class="tag-decoration">testing-8719b62</div><div id="tag16617" onclick="CopyToClipboard('tag16617');return false;" class="tag-decoration">testing-2.6.0.5494</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/8719b62977069d4baf63140307fc6daccb2775b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/30382273173" target="_blank">2026-07-28 17:18:06</a></td></tr>
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
