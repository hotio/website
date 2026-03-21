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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9041" onclick="CopyToClipboard('tag9041');return false;" class="tag-decoration">release</div><div id="tag23407" onclick="CopyToClipboard('tag23407');return false;" class="tag-decoration">release-55be235</div><div id="tag1541" onclick="CopyToClipboard('tag1541');return false;" class="tag-decoration">release-0.24.1419</div><div id="tag11006" onclick="CopyToClipboard('tag11006');return false;" class="tag-decoration">release-v0</div><div id="tag16659" onclick="CopyToClipboard('tag16659');return false;" class="tag-decoration">release-v0.24</div><div id="tag22833" onclick="CopyToClipboard('tag22833');return false;" class="tag-decoration">release-v0.24.1419</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/55be2355e25afb762bbcc7bc87296c4364870289" target="_blank">Version update: 0.24.1412 => 0.24.1419</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23331274158" target="_blank">2026-03-20 06:07:24</a></td></tr>
<tr><td><div id="tag10199" onclick="CopyToClipboard('tag10199');return false;" class="tag-decoration">testing</div><div id="tag26385" onclick="CopyToClipboard('tag26385');return false;" class="tag-decoration">testing-6fb5693</div><div id="tag9831" onclick="CopyToClipboard('tag9831');return false;" class="tag-decoration">testing-0.24.1427</div><div id="tag6343" onclick="CopyToClipboard('tag6343');return false;" class="tag-decoration">testing-v0</div><div id="tag23553" onclick="CopyToClipboard('tag23553');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8893" onclick="CopyToClipboard('tag8893');return false;" class="tag-decoration">testing-v0.24.1427</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6fb569315ceba5f49e6d7bc458e791c75b1d78ac" target="_blank">Version update: 0.24.1419 => 0.24.1427</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23373841490" target="_blank">2026-03-21 06:25:13</a></td></tr>
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
