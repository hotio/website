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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16062" onclick="CopyToClipboard('tag16062');return false;" class="tag-decoration">release</div><div id="tag27022" onclick="CopyToClipboard('tag27022');return false;" class="tag-decoration">release-761c707</div><div id="tag22868" onclick="CopyToClipboard('tag22868');return false;" class="tag-decoration">release-0.24.1003</div><div id="tag17822" onclick="CopyToClipboard('tag17822');return false;" class="tag-decoration">release-v0</div><div id="tag12199" onclick="CopyToClipboard('tag12199');return false;" class="tag-decoration">release-v0.24</div><div id="tag11092" onclick="CopyToClipboard('tag11092');return false;" class="tag-decoration">release-v0.24.1003</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/761c707f080b1af16a3bafd002191be537331fd3" target="_blank">Version update: 0.24.993 => 0.24.1003</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21557888119" target="_blank">2026-02-01 06:08:22</a></td></tr>
<tr><td><div id="tag5681" onclick="CopyToClipboard('tag5681');return false;" class="tag-decoration">testing</div><div id="tag18375" onclick="CopyToClipboard('tag18375');return false;" class="tag-decoration">testing-1e7a95a</div><div id="tag6519" onclick="CopyToClipboard('tag6519');return false;" class="tag-decoration">testing-0.24.1003</div><div id="tag26179" onclick="CopyToClipboard('tag26179');return false;" class="tag-decoration">testing-v0</div><div id="tag13351" onclick="CopyToClipboard('tag13351');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3929" onclick="CopyToClipboard('tag3929');return false;" class="tag-decoration">testing-v0.24.1003</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1e7a95a357b1239a4944f7e4b7c0763793336570" target="_blank">Version update: 0.24.993 => 0.24.1003</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21557888388" target="_blank">2026-02-01 06:08:26</a></td></tr>
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
