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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21518" onclick="CopyToClipboard('tag21518');return false;" class="tag-decoration">release</div><div id="tag32018" onclick="CopyToClipboard('tag32018');return false;" class="tag-decoration">release-ac8b57d</div><div id="tag11878" onclick="CopyToClipboard('tag11878');return false;" class="tag-decoration">release-0.24.2040</div><div id="tag28892" onclick="CopyToClipboard('tag28892');return false;" class="tag-decoration">release-v0</div><div id="tag12491" onclick="CopyToClipboard('tag12491');return false;" class="tag-decoration">release-v0.24</div><div id="tag2094" onclick="CopyToClipboard('tag2094');return false;" class="tag-decoration">release-v0.24.2040</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ac8b57de36f6df09c980d65793540e176bd56993" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27191337184" target="_blank">2026-06-09 07:39:09</a></td></tr>
<tr><td><div id="tag9233" onclick="CopyToClipboard('tag9233');return false;" class="tag-decoration">testing</div><div id="tag2092" onclick="CopyToClipboard('tag2092');return false;" class="tag-decoration">testing-030adcf</div><div id="tag6165" onclick="CopyToClipboard('tag6165');return false;" class="tag-decoration">testing-0.24.2043</div><div id="tag2477" onclick="CopyToClipboard('tag2477');return false;" class="tag-decoration">testing-v0</div><div id="tag820" onclick="CopyToClipboard('tag820');return false;" class="tag-decoration">testing-v0.24</div><div id="tag547" onclick="CopyToClipboard('tag547');return false;" class="tag-decoration">testing-v0.24.2043</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/030adcf4229a6fbdb1fecb64505061e17dbf2098" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27259145183" target="_blank">2026-06-10 07:01:04</a></td></tr>
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
