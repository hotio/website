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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19772" onclick="CopyToClipboard('tag19772');return false;" class="tag-decoration">release</div><div id="tag15277" onclick="CopyToClipboard('tag15277');return false;" class="tag-decoration">release-56455db</div><div id="tag23724" onclick="CopyToClipboard('tag23724');return false;" class="tag-decoration">release-0.24.1649</div><div id="tag26518" onclick="CopyToClipboard('tag26518');return false;" class="tag-decoration">release-v0</div><div id="tag6743" onclick="CopyToClipboard('tag6743');return false;" class="tag-decoration">release-v0.24</div><div id="tag9078" onclick="CopyToClipboard('tag9078');return false;" class="tag-decoration">release-v0.24.1649</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/56455dbe4cd524973469d944e73d7a275ba90107" target="_blank">Version update: 0.24.1641 => 0.24.1649</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24765384988" target="_blank">2026-04-22 07:13:26</a></td></tr>
<tr><td><div id="tag8620" onclick="CopyToClipboard('tag8620');return false;" class="tag-decoration">testing</div><div id="tag7546" onclick="CopyToClipboard('tag7546');return false;" class="tag-decoration">testing-0236b61</div><div id="tag25572" onclick="CopyToClipboard('tag25572');return false;" class="tag-decoration">testing-0.24.1649</div><div id="tag8088" onclick="CopyToClipboard('tag8088');return false;" class="tag-decoration">testing-v0</div><div id="tag224" onclick="CopyToClipboard('tag224');return false;" class="tag-decoration">testing-v0.24</div><div id="tag26154" onclick="CopyToClipboard('tag26154');return false;" class="tag-decoration">testing-v0.24.1649</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0236b61137485ff35083f0ba2ca3ea52f59f911d" target="_blank">Version update: 0.24.1641 => 0.24.1649</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24765386313" target="_blank">2026-04-22 07:13:28</a></td></tr>
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
