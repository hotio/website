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
<tr><td><div id="tag9703" onclick="CopyToClipboard('tag9703');return false;" class="tag-decoration">nightly</div><div id="tag19114" onclick="CopyToClipboard('tag19114');return false;" class="tag-decoration">nightly-e8cc4cb</div><div id="tag14276" onclick="CopyToClipboard('tag14276');return false;" class="tag-decoration">nightly-6.4.1.10545</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/e8cc4cb9b8b223653edc1b1999dbd945486fc3fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/30376436272" target="_blank">2026-07-28 16:03:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21047" onclick="CopyToClipboard('tag21047');return false;" class="tag-decoration">release</div><div id="tag19745" onclick="CopyToClipboard('tag19745');return false;" class="tag-decoration">release-6171903</div><div id="tag25392" onclick="CopyToClipboard('tag25392');return false;" class="tag-decoration">release-6.3.0.10514</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/61719030848aa8c34b1332e7834d22bde227aa61" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/29681328937" target="_blank">2026-07-19 09:17:59</a></td></tr>
<tr><td><div id="tag10364" onclick="CopyToClipboard('tag10364');return false;" class="tag-decoration">testing</div><div id="tag30282" onclick="CopyToClipboard('tag30282');return false;" class="tag-decoration">testing-dcab902</div><div id="tag126" onclick="CopyToClipboard('tag126');return false;" class="tag-decoration">testing-6.4.0.10523</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/dcab9026ab2cf6c8f2f96c11f8d946fe35bb3441" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/30376431069" target="_blank">2026-07-28 16:03:38</a></td></tr>
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
