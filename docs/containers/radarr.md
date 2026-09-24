---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19423" onclick="CopyToClipboard('tag19423');return false;" class="tag-decoration">nightly</div><div id="tag30395" onclick="CopyToClipboard('tag30395');return false;" class="tag-decoration">nightly-faef980</div><div id="tag14323" onclick="CopyToClipboard('tag14323');return false;" class="tag-decoration">nightly-6.4.4.10704</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/faef9807892a9f749accacac11d394365c821112" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35718360114" target="_blank">2026-09-22 10:52:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30895" onclick="CopyToClipboard('tag30895');return false;" class="tag-decoration">release</div><div id="tag31638" onclick="CopyToClipboard('tag31638');return false;" class="tag-decoration">release-9c2eaed</div><div id="tag13550" onclick="CopyToClipboard('tag13550');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/9c2eaed99d9c82f0eb3db2f18b2fa4ec925a8b38" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35938150183" target="_blank">2026-09-24 00:22:42</a></td></tr>
<tr><td><div id="tag30755" onclick="CopyToClipboard('tag30755');return false;" class="tag-decoration">testing</div><div id="tag7586" onclick="CopyToClipboard('tag7586');return false;" class="tag-decoration">testing-1eb9fd2</div><div id="tag8930" onclick="CopyToClipboard('tag8930');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/1eb9fd22e4a770f4bbf5396182008b1c32bd905b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35938151621" target="_blank">2026-09-24 00:22:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
