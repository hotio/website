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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10439" onclick="CopyToClipboard('tag10439');return false;" class="tag-decoration">release</div><div id="tag17562" onclick="CopyToClipboard('tag17562');return false;" class="tag-decoration">release-fd0a5c5</div><div id="tag2468" onclick="CopyToClipboard('tag2468');return false;" class="tag-decoration">release-0.24.3003</div><div id="tag27501" onclick="CopyToClipboard('tag27501');return false;" class="tag-decoration">release-v0</div><div id="tag6602" onclick="CopyToClipboard('tag6602');return false;" class="tag-decoration">release-v0.24</div><div id="tag30625" onclick="CopyToClipboard('tag30625');return false;" class="tag-decoration">release-v0.24.3003</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fd0a5c525edb0498f3e76431729d3ac938db2124" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41628022330" target="_blank">2026-11-03 11:30:07</a></td></tr>
<tr><td><div id="tag29314" onclick="CopyToClipboard('tag29314');return false;" class="tag-decoration">testing</div><div id="tag5449" onclick="CopyToClipboard('tag5449');return false;" class="tag-decoration">testing-b04b9b4</div><div id="tag14843" onclick="CopyToClipboard('tag14843');return false;" class="tag-decoration">testing-0.24.3009</div><div id="tag7351" onclick="CopyToClipboard('tag7351');return false;" class="tag-decoration">testing-v0</div><div id="tag1506" onclick="CopyToClipboard('tag1506');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19220" onclick="CopyToClipboard('tag19220');return false;" class="tag-decoration">testing-v0.24.3009</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b04b9b49d76366a57dcda400efbe8ebe3faaabe6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/41831524054" target="_blank">2026-11-04 12:41:57</a></td></tr>
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
