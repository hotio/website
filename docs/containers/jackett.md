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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21681" onclick="CopyToClipboard('tag21681');return false;" class="tag-decoration">release</div><div id="tag28869" onclick="CopyToClipboard('tag28869');return false;" class="tag-decoration">release-48bf2bd</div><div id="tag11193" onclick="CopyToClipboard('tag11193');return false;" class="tag-decoration">release-0.24.1008</div><div id="tag10492" onclick="CopyToClipboard('tag10492');return false;" class="tag-decoration">release-v0</div><div id="tag32203" onclick="CopyToClipboard('tag32203');return false;" class="tag-decoration">release-v0.24</div><div id="tag15524" onclick="CopyToClipboard('tag15524');return false;" class="tag-decoration">release-v0.24.1008</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/48bf2bd2808535bbe25e4736fc82e2dae490f726" target="_blank">Version update: 0.24.1003 => 0.24.1008</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21579467503" target="_blank">2026-02-02 06:15:07</a></td></tr>
<tr><td><div id="tag9104" onclick="CopyToClipboard('tag9104');return false;" class="tag-decoration">testing</div><div id="tag1706" onclick="CopyToClipboard('tag1706');return false;" class="tag-decoration">testing-1e7a95a</div><div id="tag16315" onclick="CopyToClipboard('tag16315');return false;" class="tag-decoration">testing-0.24.1003</div><div id="tag9502" onclick="CopyToClipboard('tag9502');return false;" class="tag-decoration">testing-v0</div><div id="tag13691" onclick="CopyToClipboard('tag13691');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31016" onclick="CopyToClipboard('tag31016');return false;" class="tag-decoration">testing-v0.24.1003</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1e7a95a357b1239a4944f7e4b7c0763793336570" target="_blank">Version update: 0.24.993 => 0.24.1003</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21557888388" target="_blank">2026-02-01 06:08:26</a></td></tr>
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
