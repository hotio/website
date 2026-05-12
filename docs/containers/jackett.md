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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29248" onclick="CopyToClipboard('tag29248');return false;" class="tag-decoration">release</div><div id="tag30461" onclick="CopyToClipboard('tag30461');return false;" class="tag-decoration">release-e355b37</div><div id="tag22018" onclick="CopyToClipboard('tag22018');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag16300" onclick="CopyToClipboard('tag16300');return false;" class="tag-decoration">release-v0</div><div id="tag1567" onclick="CopyToClipboard('tag1567');return false;" class="tag-decoration">release-v0.24</div><div id="tag29159" onclick="CopyToClipboard('tag29159');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e355b37c6eda191ebc9f2ff46dc31a831c265dab" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25714910651" target="_blank">2026-05-12 05:15:15</a></td></tr>
<tr><td><div id="tag31303" onclick="CopyToClipboard('tag31303');return false;" class="tag-decoration">testing</div><div id="tag15594" onclick="CopyToClipboard('tag15594');return false;" class="tag-decoration">testing-6ccd45f</div><div id="tag12217" onclick="CopyToClipboard('tag12217');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag5273" onclick="CopyToClipboard('tag5273');return false;" class="tag-decoration">testing-v0</div><div id="tag12541" onclick="CopyToClipboard('tag12541');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25004" onclick="CopyToClipboard('tag25004');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6ccd45fdeb952b8ac234a905496c6d4de141ed17" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25714912367" target="_blank">2026-05-12 05:15:18</a></td></tr>
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
