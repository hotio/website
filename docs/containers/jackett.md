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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31298" onclick="CopyToClipboard('tag31298');return false;" class="tag-decoration">release</div><div id="tag8559" onclick="CopyToClipboard('tag8559');return false;" class="tag-decoration">release-5ccc9fe</div><div id="tag700" onclick="CopyToClipboard('tag700');return false;" class="tag-decoration">release-0.24.2007</div><div id="tag1626" onclick="CopyToClipboard('tag1626');return false;" class="tag-decoration">release-v0</div><div id="tag248" onclick="CopyToClipboard('tag248');return false;" class="tag-decoration">release-v0.24</div><div id="tag6018" onclick="CopyToClipboard('tag6018');return false;" class="tag-decoration">release-v0.24.2007</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5ccc9fe38c339269bf806aeaf637df078b6fe502" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26872314565" target="_blank">2026-06-03 08:13:25</a></td></tr>
<tr><td><div id="tag13615" onclick="CopyToClipboard('tag13615');return false;" class="tag-decoration">testing</div><div id="tag22405" onclick="CopyToClipboard('tag22405');return false;" class="tag-decoration">testing-35d4c77</div><div id="tag20604" onclick="CopyToClipboard('tag20604');return false;" class="tag-decoration">testing-0.24.2007</div><div id="tag8229" onclick="CopyToClipboard('tag8229');return false;" class="tag-decoration">testing-v0</div><div id="tag18602" onclick="CopyToClipboard('tag18602');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22879" onclick="CopyToClipboard('tag22879');return false;" class="tag-decoration">testing-v0.24.2007</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/35d4c7776719092c5f88a3b04331f09cc1305e3b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26872315446" target="_blank">2026-06-03 08:13:26</a></td></tr>
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
