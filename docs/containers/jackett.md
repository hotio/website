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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15202" onclick="CopyToClipboard('tag15202');return false;" class="tag-decoration">release</div><div id="tag5467" onclick="CopyToClipboard('tag5467');return false;" class="tag-decoration">release-ef2771b</div><div id="tag19146" onclick="CopyToClipboard('tag19146');return false;" class="tag-decoration">release-0.24.1261</div><div id="tag9878" onclick="CopyToClipboard('tag9878');return false;" class="tag-decoration">release-v0</div><div id="tag13433" onclick="CopyToClipboard('tag13433');return false;" class="tag-decoration">release-v0.24</div><div id="tag8030" onclick="CopyToClipboard('tag8030');return false;" class="tag-decoration">release-v0.24.1261</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ef2771b93532edbc608acbeb77e193ea918c387d" target="_blank">Version update: 0.24.1247 => 0.24.1261</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22610456774" target="_blank">2026-03-03 05:58:19</a></td></tr>
<tr><td><div id="tag28276" onclick="CopyToClipboard('tag28276');return false;" class="tag-decoration">testing</div><div id="tag4370" onclick="CopyToClipboard('tag4370');return false;" class="tag-decoration">testing-1ee5c08</div><div id="tag23899" onclick="CopyToClipboard('tag23899');return false;" class="tag-decoration">testing-0.24.1275</div><div id="tag16016" onclick="CopyToClipboard('tag16016');return false;" class="tag-decoration">testing-v0</div><div id="tag4237" onclick="CopyToClipboard('tag4237');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30307" onclick="CopyToClipboard('tag30307');return false;" class="tag-decoration">testing-v0.24.1275</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1ee5c08311c3f39f4f7f5066002305fde1b2dbbe" target="_blank">Version update: 0.24.1261 => 0.24.1275</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22657908143" target="_blank">2026-03-04 06:28:28</a></td></tr>
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
