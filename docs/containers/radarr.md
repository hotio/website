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
<tr><td><div id="tag9125" onclick="CopyToClipboard('tag9125');return false;" class="tag-decoration">nightly</div><div id="tag2598" onclick="CopyToClipboard('tag2598');return false;" class="tag-decoration">nightly-df712f1</div><div id="tag32317" onclick="CopyToClipboard('tag32317');return false;" class="tag-decoration">nightly-6.4.4.10684</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/df712f10e90ba0e730a700d9f2e2aeef09aea7ba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35301334093" target="_blank">2026-09-18 02:57:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28530" onclick="CopyToClipboard('tag28530');return false;" class="tag-decoration">release</div><div id="tag14056" onclick="CopyToClipboard('tag14056');return false;" class="tag-decoration">release-e3f83b9</div><div id="tag27728" onclick="CopyToClipboard('tag27728');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/e3f83b91b76675f8c9e97f0bd2e82dd84cfbdd7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35301333996" target="_blank">2026-09-18 02:56:59</a></td></tr>
<tr><td><div id="tag17642" onclick="CopyToClipboard('tag17642');return false;" class="tag-decoration">testing</div><div id="tag5604" onclick="CopyToClipboard('tag5604');return false;" class="tag-decoration">testing-cbbc6ae</div><div id="tag21996" onclick="CopyToClipboard('tag21996');return false;" class="tag-decoration">testing-6.4.4.10685</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/cbbc6ae0b2ad71f49deb2028405e472fa967f419" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/35301329863" target="_blank">2026-09-18 02:56:55</a></td></tr>
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
